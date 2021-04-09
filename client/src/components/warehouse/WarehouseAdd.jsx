import React, { useState, useEffect } from 'react';

import axios from 'axios';

const WarehouseAdd = () => {
    const emptyError = "This field is required.";

    const [formContents, setFormContents] = useState();
    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const validateForm = (formData) => {
        let isValid = true;
        if (!formData.get('warehouseName')) {
            isValid = false;
            setWarehouseName({ error: emptyError });
        } else {
            setWarehouseName({ error: "" });
        }

        if (!formData.get('address')) {
            isValid = false;
            setAddress({ error: emptyError });
        } else {
            setAddress({ error: "" });
        }

        if (!formData.get('city')) {
            isValid = false;
            setCity({ error: emptyError });
        } else {
            setCity({ error: "" });
        }

        if (!formData.get('country')) {
            isValid = false;
            setCountry({ error: emptyError });
        } else {
            setCountry({ error: "" });
        }

        if (!formData.get('contactName')) {
            isValid = false;
            setContactName({ error: emptyError });
        } else {
            setContactName({ error: "" });
        }

        if (!formData.get('position')) {
            isValid = false;
            setPosition({ error: emptyError });
        } else {
            setPosition({ error: "" });
        }

        const phonePattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

        if (!formData.get('phone')) {
            isValid = false;
            setPhone({ error: emptyError });
        } else if (!phonePattern.test(formData.get('phone'))) {
            isValid = false;
            setPhone({ error: "not a valid phone number" });
        } else {
            setPhone({ error: "" });
        }

        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!formData.get('email')) {
            isValid = false;
            setEmail({ error: emptyError });
        } else if (!emailPattern.test(formData.get('email'))) {
            isValid = false;
            setEmail({ error: "Not valid email syntax" });
        } else {
            setEmail({ error: "" });
        }
        return isValid;
    }

    const addWarehouse = (event) => {

        event.preventDefault();

        setFormContents({
            ...formContents,
            [event.target.name]: event.target.value,

        });

        const formData = new FormData(event.target);

        if (validateForm(formData)) {
            console.log("passed validation");
            axios
                .post("http://localhost:8080/api/warehouses/add", Object.fromEntries(formData))
                .then((response) => {
                    console.log("warehouse added")
                })
                .catch((err) => console.log(err));

        } else {
            console.log("failed validation");
            return
        }
    }

    return (
        <>
            <div className="card__container">
                <div className
                    className="card__header--container">
                    <div className="card__arrow"></div>
                    <h1 className="card__header--title">Add Warehouse</h1>
                </div>
            </div>

            <form onSubmit={addWarehouse}>
                <div className="card__details--container">
                    <h2>Warehouse Details</h2>
                    <div className="form-group">
                        <div className="form-label">Warehouse Name</div>
                        <input type="text"
                            name="warehouseName"
                        />
                        <div className="text-danger">
                            {formContents && !formContents.warehouseName ? warehouseName.error : ""}
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-label">Street Address</div>
                        <input type="text" name="address"
                        />
                        <div className="text-danger">
                            {formContents && !formContents.address ? address.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label">City</div>
                        <input type="text" name="city" />
                        <div className="text-danger">
                            {formContents && !formContents.city ? city.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label">Country</div>
                        <input type="text" name="country" />
                        <div className="text-danger">
                            {formContents && !formContents.country ? country.error : ""}
                        </div>
                    </div>
                </div>
                <div className="card__details--container">
                    <h2>Contact Details</h2>
                    <div className="form-group">
                        <div className="form-label">Contact Name</div>
                        <input type="text" name="contactName" />
                        <div className="text-danger">
                            {formContents && !formContents.contactName ? contactName.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label">Position</div>
                        <input type="text" name="position" />
                        <div className="text-danger">
                            {formContents && !formContents.position ? position.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label">Phone Number</div>
                        <input type="text" name="phone" placeholder="(xxx) xxx-xxxx" />
                        <div className="text-danger">
                            {formContents && !formContents.phone ? phone.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-label">Email</div>
                        <input type="text" name="email" />
                        <div className="text-danger">
                            {formContents && !formContents.email ? email.error : ""}
                        </div>
                    </div>
                </div>
                <div className="form__button-group">
                    <button className="btn">Cancel</button>
                    <button className="btn btn-primary" type="submit">+ Add Warehouse</button>
                </div>
            </form>
        </>
    )
}


export default WarehouseAdd;