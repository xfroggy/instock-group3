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
      <img className="arrow" src={arrow} alt="arrow" />
      <h1>Add New Inventory Item</h1>
      <label for="category">Item Name</label>
      <input
        type="text"
        id="ItemName"
        name="ItemName"
        placeholder="Item name"
        onChange={handleChange}
      />{" "}
      <br></br>
      <label for="category">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />{" "}
      <br></br>
      <label for="category">Select category</label>
      <select name="category" id="category" onChange={handleChange}>
        <option value="Electronics">Electronics</option>
        <option value="Gear">Gear</option>
        <option value="Apparel">Apparel</option>
        <option value="Keychain">Keychain</option>
        <option value="Health">Health</option>
        <option value="Accessories">Accessories</option>
      </select>
      <br></br>
      <label for="Quantity">Quantity</label>
      <input
        type="number"
        id="Quantity"
        name="Quantity"
        onChange={handleChange}
      />{" "}
      <br></br>
      <label for="warehouse">Select warehousey</label>
      <select name="warehouse" id="warehouse" onChange={handleChange}>
        <option value="Manhattan">Manhattan</option>
      </select>
      <br></br>
      <button type="submit">Add Item</button>
      <button>Cancel</button>
    </form>
  );
};

export default EditInventory;
