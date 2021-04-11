import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Inventories.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useHistory } from "react-router-dom";

const ItemDetail = ({ match }) => {
  let history = useHistory();
  const [inventoryItem, setIventoryItem] = useState({});

  useEffect(() => {
    axios
      .get(`/api/inventories/edit/${match.params.id}`)

      .then((res) => {
        console.log(res.data);
        setIventoryItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);
  function handleClick() {
    history.push("/newitem");
  }
  return (
    <div className="inventory__container">
      <div className="inventory__top">
        <img className="arrow" src={arrow} alt="arrow" />
        <h2>{inventoryItem.itemName}</h2>
        <button onClick={handleClick}>
          <img className="edit" src={edit} alt="edit" />
        </button>
      </div>
      <div className="inventory__info">
        <h6>ITEM DESCRIPTION:</h6>
        {inventoryItem.description}
        <h6>CATEGORY:</h6>
        <div>{inventoryItem.category}</div>
        <h6>STATUS:</h6>
        <div className="inventory__details">
          <div className="inventory__status">{inventoryItem.status}</div>
          <div className="inventory__quantity">
            <h6>QUANTITY:</h6>
            <div>{inventoryItem.quantity}</div>
          </div>
        </div>
        <h6>WAREHOUSE:</h6>
        <div>{inventoryItem.warehouseName}</div>
      </div>
    </div>
  );
};
export default ItemDetail;
