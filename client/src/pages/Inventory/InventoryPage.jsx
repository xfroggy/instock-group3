import React, { useState, useEffect } from "react";
import "./InventoryPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteConfirmation from "../../components/inventories/InventoryDelete";

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

  //console.log(data);

  const [deleteMessage, setDeleteMessage] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [inventoryMessage, setInventoryMessage] = useState(null);
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [item, setItem] = useState(null)

  const showDeleteModal = (type, id, item) => {
    setType(type);
    setId(id);
    setItem(item);
    setInventoryMessage(null);
    console.log('Here my data to delete: ', type, id, item);

    if (type === "inventory") {
      setDeleteMessage(`Please confirm that you'd like to delete ${item} from the inventory list.  You won't be able to undo this action.`)
    }

    setDisplayConfirmationModal(true);
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  }

  const submitDelete = (type, id) => {
    if (type === "inventory") {

      // axios
      //   .delete(`http://localhost:8080/api/inventories/delete/` + id)
      //   .then((response) => {
      //     console.log(response);

      //   }).catch((error) => console.error(`Error: ${error}`));

    }
    setInventoryMessage("The inventory item was successfully deleted");


    setDisplayConfirmationModal(false);
  }



  return (
    <>
      <section className="inventoryPage__parent">
        <div className="inventoryPage__background--gray">
          <div className="inventoryPage__background"></div>
          <div className="inventoryPage__firstRow">
            <div className="inventoryPage__firstRow--box">
              <div className="inventoryPage__container">
                <div className="inventoryPage__box--row">
                  <h1 className="inventoryPage__title">Inventory</h1>
                  <div className="inventoryPage__searchnButton">
                    <input
                      type=""
                      placeholder="   Search..."
                      className="inventoryPage__searchBar"
                    ></input>
                    <button>+Add New Item</button>
                  </div>
                </div>
                <div className="inventoryPage__bar">
                  <span className="inventoryPage__bar--arrow inventoryPage__bar--item">
                    INVENTORY ITEM
                  </span>
                  <span className="inventoryPage__bar--arrow inventoryPage__bar--cat">
                    CATEGORY
                  </span>
                  <span className="inventoryPage__bar--arrow inventoryPage__bar--status">
                    STATUS
                  </span>
                  <span className="inventoryPage__bar--arrow inventoryPage__bar--qty">
                    QTY
                  </span>
                  <span className="inventoryPage__bar--arrow inventoryPage__bar--warehouse">
                    WAREHOUSE
                  </span>
                  <span className="inventoryPage__bar--action">ACTIONS</span>
                </div>
                {data &&
                  data.map((list, index) => (
                    <div className="inventoryPage__tableRow">
                      <div className="inventoryPage__tableFlex">
                        <div className="inventoryPage__tableColumn">
                          <div className="inventoryPage__rowAlign">
                            <span className="inventoryPage__label">
                              INVENTORY ITEM
                            </span>
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
                            <span className="inventoryPage__label">
                              CATEGORY
                            </span>
                            <span className="inventoryPage__text">
                              {list.category}
                            </span>
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
                          <span className="inventoryPage__label">
                            WAREHOUSE
                          </span>
                          <span className="inventoryPage__rowAlign--warehouse">
                            <span>{list.warehouseName}</span>
                          </span>
                        </div>
                      </div>
                      <div className="inventoryPage__imgBox">
                        <div
                          onClick={() => { showDeleteModal("inventory", `${list.id}`, `${list.itemName}`) }}
                          className="inventoryPage__deleteImg"></div>
                        <Link to={`/inventory/edit/${list.id}`}>
                          <div className="inventoryPage__editImg"></div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} type={type} id={id} item={item} message={deleteMessage} />
      </section>
    </>
  );
}
