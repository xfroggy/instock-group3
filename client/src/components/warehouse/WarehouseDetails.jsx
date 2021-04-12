import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";

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
  /// inventory info
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/api/";
  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = () => {
    axios
      .get(`${url}inventories/`)
      .then((res) => {
        const Inventory = res.data;
        setData(Inventory);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

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
        {data &&
          data.map((list, index) => (
            <div className="inventoryPage__tableRow">
              <div className="inventoryPage__tableFlex">
                <div className="inventoryPage__tableColumn">
                  <div className="inventoryPage__rowAlign">
                    <span className="inventoryPage__label">INVENTORY ITEM</span>
                    <Link
                      to={`/inventory/${list.id}`}
                      className="inventoryPage__textDec"
                    >
                      <span className="inventoryPage__name">
                        {list.itemName}
                      </span>
                    </Link>
                  </div>
                  <div className="inventoryPage__rowAlign--cat">
                    <span className="inventoryPage__label">CATEGORY</span>
                    <span className="inventoryPage__text">{list.category}</span>
                  </div>
                </div>
                <div className="inventoryPage__tableColumn">
                  <div className="inventoryPage__rowAlign--status">
                    <span className="inventoryPage__label">STATUS</span>

                    <span
                      className={
                        list.status === "In Stock"
                          ? "inventoryPage__greenStat"
                          : "inventoryPage__orangeStat"
                      }
                    >
                      {list.status}
                    </span>
                  </div>

                  <span className="inventoryPage__label">QTY</span>
                  <span className="inventoryPage__rowAlign--qty">
                    <span>{list.quantity}</span>
                  </span>
                </div>
              </div>
              <div className="inventoryPage__imgBox">
                <div className="inventoryPage__deleteImg"></div>
                <div className="inventoryPage__editImg"></div>
              </div>
            </div>
          ))}
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
