import React, { useState, useEffect } from "react";
import "./WarehousePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

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
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  console.log(data);

  return (
    <>
      <section className="warehousePage__parent">
        <div className="warehousePage__background--gray">
          <div className="warehousePage__background"></div>
          <div className="warehousePage__firstRow">
            <div className="warehousePage__firstRow--box">
              <div className="warehousePage__container">
                <div className="warehousePage__box--row">
                  <h1 className="warehousePage__title">Warehouses</h1>
                  <div className="warehousePage__searchnButton">
                    <input
                      type=""
                      placeholder="   Search..."
                      className="warehousePage__searchBar"
                    ></input>
                    <Link to="/warehouses/add">
                      <button>+Add New Warehouse</button>
                    </Link>
                  </div>
                </div>
                <div className="warehousePage__bar">
                  <span className="warehousePage__bar--arrow warehousePage__bar--warehouse">
                    WAREHOUSE
                  </span>
                  <span className="warehousePage__bar--arrow warehousePage__bar--addy">
                    ADDRESS
                  </span>
                  <span className="warehousePage__bar--arrow warehousePage__bar--name">
                    CONTACT NAME
                  </span>
                  <span className="warehousePage__bar--arrow warehousePage__bar--info">
                    CONTACT INFORMATION
                  </span>
                  <span className="warehousePage__bar--action">ACTIONS</span>
                </div>
                {data &&
                  data.map((list, index) => (
                    <div className="warehousePage__tableRow">
                      <div className="warehousePage__tableFlex">
                        <div className="warehousePage__tableColumn">
                          <div className="warehousePage__rowAlign">
                            <span className="warehousePage__label">
                              WAREHOUSE
                            </span>
                            <Link
                              to={`/warehouses/${list.id}`}
                              className="warehousePage__textDec"
                            >
                              <span className="warehousePage__name">
                                {list.name}
                              </span>
                            </Link>
                          </div>
                          <div className="warehousePage__rowAlign--addy">
                            <span className="warehousePage__label">
                              ADDRESS
                            </span>
                            <span className="warehousePage__text">
                              {list.address}, {list.city}, {list.country}
                            </span>
                          </div>
                        </div>
                        <div className="warehousePage__tableColumn">
                          <div className="warehousePage__rowAlign--name">
                            <span className="warehousePage__label">
                              CONTACT NAME
                            </span>
                            <span className="warehousePage__text">
                              {list.contact.name}
                            </span>
                          </div>
                          <div className="warehousePage__rowAlign--info">
                            <span className="warehousePage__label">
                              CONTACT INFORMATION
                            </span>
                            <span className="warehousePage__text--column">
                              <span>{list.contact.phone}</span>
                              <span>{list.contact.email}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="warehousePage__imgBox">
                        <div className="warehousePage__deleteImg"></div>
                        <Link to={`/warehouses/edit/${list.id}`}>
                          <div className="warehousePage__editImg"></div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
