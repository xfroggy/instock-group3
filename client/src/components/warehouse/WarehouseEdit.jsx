import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";


import axios from 'axios';

const WarehouseEdit = () => {

    const history = useHistory();

    const { id } = useParams();
    console.log("The id is: ", id);

    const emptyError = `<div class="danger-icon"><div class="text-danger">This field is required.</div></div>`;

    const [formContents, setFormContents] = useState();
    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        let warehouseToEdit = {};
        axios
            .get(`http://localhost:8080/api/warehouses/edit/${id}`)
            .then((response) => {
                warehouseToEdit = response.data;
                console.log("warehouse details received")
                console.log(warehouseToEdit);
                console.log("Response data warehouse: ", response.data.name)
                setFormContents({
                    ...formContents, warehouseName: response.data.name,
                    address: response.data.address,
                    city: response.data.city,
                    country: response.data.country,
                    contactName: response.data.contact.name,
                    position: response.data.contact.position,
                    phone: response.data.contact.phone,
                    email: response.data.contact.email
                })
                // console.log("The formContents: ", formContents.warehouseName);

            })
            .catch((err) => console.log(err));
    }, [])

    const goToPreviousPath = () => {
        history.goBack();
    }

    const changeHandler = (event) => {
        const value = event.target.value;
        setFormContents({
            [event.target.name]: value,
        })
    }


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
        console.log("phone error: ", phone.error)
        console.log("formContents.phone: ", formContents.phone)

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

    const editWarehouse = (event) => {

        event.preventDefault();

        setFormContents({
            ...formContents,
            [event.target.name]: event.target.value,
        });

        const formData = new FormData(event.target);

        if (validateForm(formData)) {
            console.log("passed validation");
            axios
                .put(`http://localhost:8080/api/warehouses/edit/${id}`, Object.fromEntries(formData))
                .then((response) => {
                    alert("Warehouse Updated")
                    history.goBack();
                })
                .catch((err) => console.log(err));

        } else {
            console.log("failed validation");
            return
        }
    }

    return (
        <>
            <section className="warehouse__parent">
                <div className="warehouse__background--gray">
                    <div className="warehouse__background"></div>
                    <div className="warehouse__firstRow">
                        <div className="warehouse__firstRow--box">
                            <div className="warehouse__container">
                                <div className="card__box--row">

                                    <div className="card__top--container">
                                        <div className="card__arrow"></div>
                                        <h1 className="card__top--title">Edit Warehouse</h1>
                                    </div>
                                </div>


                                <form onSubmit={editWarehouse}>
                                    <div className="card__horizontal">
                                        <div className="card__details--container--first">
                                            <h2 className="card__details--title">Warehouse Details</h2>
                                            <div className="form__group">
                                                <div className="form__label">Warehouse Name</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: warehouseName.error ? '1px solid red' : '' }} type="text"
                                                    name="warehouseName"
                                                    value={formContents && formContents.warehouseName}
                                                />
                                                <div className="error__container">
                                                    {formContents && !formContents.warehouseName ?
                                                        <div dangerouslySetInnerHTML={{ __html: warehouseName.error }}></div> : ""}
                                                </div>
                                            </div>

                                            <div className="form__group">
                                                <div className="form__label">Street Address</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: address.error ? '1px solid red' : '' }} type="text" name="address"
                                                    value={formContents && formContents.address}
                                                />
                                                <div className="error__container">
                                                    {formContents && !formContents.address ?
                                                        <div dangerouslySetInnerHTML={{ __html: address.error }}></div> : ""}
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__label">City</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: city.error ? '1px solid red' : '' }} type="text" name="city" value={formContents && formContents.city} />
                                                <div className="error__container">
                                                    {formContents && !formContents.city ?
                                                        <div dangerouslySetInnerHTML={{ __html: city.error }}></div> : ""}
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__label">Country</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: country.error ? '1px solid red' : '' }} type="text" name="country" value={formContents && formContents.country} />
                                                <div className="error__container">
                                                    {formContents && !formContents.country ?
                                                        <div dangerouslySetInnerHTML={{ __html: country.error }}></div> : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__details--container--second ">
                                            <h2 className="card__details--title">Contact Details</h2>
                                            <div className="form__group">
                                                <div className="form__label">Contact Name</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: contactName.error ? '1px solid red' : '' }} type="text" name="contactName" value={formContents && formContents.contactName} />
                                                <div className="error__container">
                                                    {formContents && !formContents.contactName ?
                                                        <div dangerouslySetInnerHTML={{ __html: contactName.error }}></div> : ""}
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__label">Position</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: position.error ? '1px solid red' : '' }} type="text" name="position" value={formContents && formContents.position} />
                                                <div className="error__container">
                                                    {formContents && !formContents.position ?
                                                        <div dangerouslySetInnerHTML={{ __html: position.error }}></div> : ""}
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__label">Phone Number</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: phone.error ? '1px solid red' : '' }} type="text" name="phone" value={formContents && formContents.phone} />
                                                <div className="error__container">
                                                    {formContents && !formContents.phone ?
                                                        <div dangerouslySetInnerHTML={{ __html: phone.error }}></div> : ""}
                                                </div>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__label">Email</div>
                                                <input onChange={changeHandler} className="form__input" style={{ border: email.error ? '1px solid red' : '' }} type="text" name="email" value={formContents && formContents.email} />
                                                <div className="error__container">
                                                    {formContents && !formContents.email ?
                                                        <div dangerouslySetInnerHTML={{ __html: email.error }}></div> : ""}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__button-group">
                                        <button onClick={goToPreviousPath} className="btn-clear">Cancel</button>
                                        <button className="btn-add" type="submit">Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}


export default WarehouseEdit;