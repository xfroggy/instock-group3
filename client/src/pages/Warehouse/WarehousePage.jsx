import React, { useState, useEffect } from "react";
import "./WarehousePage.scss";
import axios from "axios";

export default function WarehousePage() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/api/";
  useEffect(() => {
    getAllWarehouses();
  }, []);

  const getAllWarehouses = () => {
    axios
      .get(`${url}warehouses`)
      .then((res) => {
        const allWarehouses = res.data;
        setData(allWarehouses);
        console.log(setData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return (
    <>
      <section className="warehouse__parent">
        <div className="warehouse__background"></div>
        <div className="warehouse__firstRow">
          <div className="warehouse__firstRow--box">
            <div className="warehouse__container">
              <h1 className="warehouse__title">Warehouses</h1>
              <div className="warehouse__searchnButton">
                <input
                  type=""
                  placeholder="search"
                  className="warehouse__searchBar"
                ></input>
                <button>+Add New Warehouse</button>
              </div>
              <div className="warehouse__bar">
                <span className="warehouse__bar--arrow">WAREHOUSE</span>
                <span className="warehouse__bar--arrow">ADDRESS</span>
                <span className="warehouse__bar--arrow">CONTACT NAME</span>
                <span className="warehouse__bar--arrow">
                  CONTACT INFORMATION
                </span>
                <span>ACTION</span>
              </div>
              <div className="warehouse__tableRow">
                <span className="warehouse__name">Santa Monica</span>
                <span className="warehouse__text">
                  1125 Stanley street, Montreal,CAN
                </span>
                <span className="warehouse__text">Brad MacDonald</span>
                <span className="warehouse__text">+1(629)555-0129</span>
                <div className="warehouse__imgBox">
                  <div className="warehouse__deleteImg"></div>
                  <div className="warehouse__editImg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
