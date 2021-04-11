import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseDetails.scss";

function WarehouseDetails({ match }) {
  const [warehouse, setWarehouse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const warehouseData = await axios.get(
        `http://localhost:8080/api/warehouses/${match.params.id}`
      );
      console.log(warehouseData.data);
      setWarehouse(warehouseData.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  if (!warehouse) return null;
  return (
    <div>
      <div>
        <div className="warehouse__name">
          <div className="warehouse__name--left">
            <button className="button">
              <img className="back__icon" src={ArrowIcon} />
            </button>
            <h1 className="warehouse__name--text">{warehouse.name}</h1>
          </div>
          <button className="button__round">
            <img src={EditIcon} />
          </button>
        </div>
        <div className="details__top">
          <div className="details__top--address">
            <h3>WAREHOUSE ADDRESS:</h3>
            <p>{warehouse.address}</p>
            <p>
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <div className="details__top--contact">
            <div className="details__top--name">
              <h3>CONTACT NAME:</h3>
              <p>{warehouse.contact.name}</p>
              <p>{warehouse.contact.position}</p>
            </div>
            <div className="details__top--info">
              <h3>CONTACT INFORMATION:</h3>
              <p>{warehouse.contact.phone}</p>
              <p>{warehouse.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WarehouseDetails;

// const ItemDetail = ({ match }) => {
//   const [inventoryItem, setIventoryItem] = useState({});
//   useEffect(() => {
//     axios
//       .get(`/api/inventories/edit/${match.params.id}`)
//       .then((res) => {
//         setIventoryItem(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [match.params.id]);
