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
      <section className="warehouse__parent">
        <div className="warehouse__background--gray">
          <div className="warehouse__background"></div>
          <div className="warehouse__firstRow">
            <div className="warehouse__firstRow--box">
              <div className="warehouse__container">
                <div className="warehouse__box--row">
                  <h1 className="warehouse__title">Warehouses</h1>
                  <div className="warehouse__searchnButton">
                    <input
                      type=""
                      placeholder="   Search..."
                      className="warehouse__searchBar"
                    ></input>
                    <button>+Add New Warehouse</button>
                  </div>
                </div>
                <div className="warehouse__bar">
                  <span className="warehouse__bar--arrow warehouse__bar--warehouse">
                    WAREHOUSE
                  </span>
                  <span className="warehouse__bar--arrow warehouse__bar--addy">
                    ADDRESS
                  </span>
                  <span className="warehouse__bar--arrow warehouse__bar--name">
                    CONTACT NAME
                  </span>
                  <span className="warehouse__bar--arrow warehouse__bar--info">
                    CONTACT INFORMATION
                  </span>
                  <span className="warehouse__bar--action">ACTIONS</span>
                </div>
                {data &&
                  data.map((list, index) => (
                    <div className="warehouse__tableRow">
                      <div className="warehouse__tableFlex">
                        <div className="warehouse__tableColumn">
                          <div className="warehouse__rowAlign">
                            <span className="warehouse__label">WAREHOUSE</span>
                            <Link
                              to={`/warehouses/${list.id}`}
                              className="warehouse__textDec"
                            >
                              <span className="warehouse__name">
                                {list.name}
                              </span>
                            </Link>
                          </div>
                          <div className="warehouse__rowAlign--addy">
                            <span className="warehouse__label">ADDRESS</span>
                            <span className="warehouse__text">
                              {list.address}, {list.city}, {list.country}
                            </span>
                          </div>
                        </div>
                        <div className="warehouse__tableColumn">
                          <div className="warehouse__rowAlign--name">
                            <span className="warehouse__label">
                              CONTACT NAME
                            </span>
                            <span className="warehouse__text">
                              {list.contact.name}
                            </span>
                          </div>
                          <div className="warehouse__rowAlign--info">
                            <span className="warehouse__label">
                              CONTACT INFORMATION
                            </span>
                            <span className="warehouse__text--column">
                              <span>{list.contact.phone}</span>
                              <span>{list.contact.email}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="warehouse__imgBox">
                        <div className="warehouse__deleteImg"></div>
                        <div className="warehouse__editImg"></div>
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
