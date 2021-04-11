import React, { useState, useEffect } from "react";
import "./InventoryPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InventoryPage() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/api/";
  useEffect(() => {
    getAllInventory();
  }, []);

  const getAllInventory = () => {
    axios
      .get(`${url}inventories`)
      .then((res) => {
        const allInventory = res.data;
        setData(allInventory);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <>
      <section className="inventory__parent">
        <div className="inventory__background--gray">
          <div className="inventory__background"></div>
          <div className="inventory__firstRow">
            <div className="inventory__firstRow--box">
              <div className="inventory__container">
                <div className="inventory__box--row">
                  <h1 className="inventory__title">Inventory</h1>
                  <div className="inventory__searchnButton">
                    <input
                      type=""
                      placeholder="   Search..."
                      className="inventory__searchBar"
                    ></input>
                    <button>+Add New Item</button>
                  </div>
                </div>
                <div className="inventory__bar">
                  <span className="inventory__bar--arrow inventory__bar--item">
                    INVENTORY ITEM
                  </span>
                  <span className="inventory__bar--arrow inventory__bar--cat">
                    CATEGORY
                  </span>
                  <span className="inventory__bar--arrow inventory__bar--status">
                    STATUS
                  </span>
                  <span className="inventory__bar--arrow inventory__bar--qty">
                    QTY
                  </span>
                  <span className="inventory__bar--arrow inventory__bar--warehouse">
                    WAREHOUSE
                  </span>
                  <span className="inventory__bar--action">ACTIONS</span>
                </div>
                {data &&
                  data.map((list, index) => (
                    <div className="inventory__tableRow">
                      <div className="inventory__tableFlex">
                        <div className="inventory__tableColumn">
                          <div className="inventory__rowAlign">
                            <span className="inventory__label">
                              INVENTORY ITEM
                            </span>
                            <Link
                              to={`/inventory/${list.id}`}
                              className="inventory__textDec"
                            >
                              <span className="inventory__name">
                                {list.itemName}
                              </span>
                            </Link>
                          </div>
                          <div className="inventory__rowAlign--cat">
                            <span className="inventory__label">CATEGORY</span>
                            <span className="inventory__text">
                              {list.category}
                            </span>
                          </div>
                        </div>
                        <div className="inventory__tableColumn">
                          <div className="inventory__rowAlign--status">
                            <span className="inventory__label">STATUS</span>

                            <span
                              className={
                                list.status === "In Stock"
                                  ? "inventory__greenStat"
                                  : "inventory__orangeStat"
                              }
                            >
                              {list.status}
                            </span>
                          </div>

                          <span className="inventory__label">QTY</span>
                          <span className="inventory__rowAlign--qty">
                            <span>{list.quantity}</span>
                          </span>
                          <span className="inventory__label">WAREHOUSE</span>
                          <span className="inventory__rowAlign--warehouse">
                            <span>{list.warehouseName}</span>
                          </span>
                        </div>
                      </div>
                      <div className="inventory__imgBox">
                        <div className="inventory__deleteImg"></div>
                        <div className="inventory__editImg"></div>
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
