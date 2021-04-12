import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditInventories.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";

const EditInventory = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios.post("/api/inventories/newitem", formData);
    } catch (error) {
      console.log(`Oops!`, "Something went wrong.");
    }
  };

  return (
    <form className="inventories__item--card" onSubmit={handleSubmit}>
      <div className="inventory__head">
        <img className="arrow2" src={arrow} alt="arrow" />
        <h1>Add New Inventory Item</h1>
      </div>
      <div className="inventory__body">
        <h2 className="inventory__title">Item Details</h2>
        <label className="label" for="category">
          Item Name
        </label>
        <input
          className="item__box"
          type="text"
          id="ItemName"
          name="ItemName"
          placeholder="Item name"
          onChange={handleChange}
        />{" "}
        <br></br>
        <label className="label" for="category">
          Description
        </label>
        <input
          className="description__box"
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />{" "}
        <br></br>
        <label className="label" for="category">
          Category
        </label>
        <select
          className="category__box"
          name="Select category"
          id="category"
          onChange={handleChange}
        >
          <option value="Electronics">Electronics</option>
          <option value="Gear">Gear</option>
          <option value="Apparel">Apparel</option>
          <option value="Keychain">Keychain</option>
          <option value="Health">Health</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <br></br>
      <h2 className="item__avail">Item Availability</h2>
      <label className="status__label" for="inventory">
        {" "}
        Status{" "}
      </label>
      <br></br>
      <div className="status__container">
        <input type="checkbox" id="status1" name="status1" value="In stock" />
        <label for="inventory"> In stock</label>
        <br></br>
        <input
          type="checkbox"
          id="status2"
          name="status2"
          value="Out of stock"
        />
        <label for="inventory"> Out of stock</label>
        <br></br>
      </div>
      <div className="quantity__container">
        <label for="Quantity">Quantity</label>
        <input
          className="quantity__box"
          type="number"
          id="Quantity"
          name="Quantity"
          onChange={handleChange}
        />{" "}
      </div>
      <br></br>
      <div className="warehouse__container">
        <label for="warehouse">Select warehousey</label>
        <select name="warehouse" id="warehouse" onChange={handleChange}>
          <option value="Manhattan">Manhattan</option>
        </select>
      </div>
      <br></br>
      <button type="submit">Add Item</button>
      <button>Cancel</button>
    </form>
  );
};

export default EditInventory;
