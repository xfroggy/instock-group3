import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Inventories.scss";

const ItemDetail = ({ match }) => {
  const [inventoryItem, setIventoryItem] = useState({});
  useEffect(() => {
    axios
      .get(`/api/inventories/edit/${match.params.id}`)
      .then((res) => {
        setIventoryItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);

  return (
    <div className="inventory__container">
      <h1>{inventoryItem.itemName}</h1>
      <span className="inventory__container--line"></span>
      <div>{inventoryItem.description}</div>
      <div>{inventoryItem.category}</div>
      <div>{inventoryItem.status}</div>
      <div>{inventoryItem.quantity}</div>
      <div>{inventoryItem.warehouse} </div>
    </div>
  );
};
export default ItemDetail;
