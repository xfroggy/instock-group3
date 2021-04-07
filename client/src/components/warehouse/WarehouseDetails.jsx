import React, { useState } from "react";
import ArrowIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetails() {
  const data = {
    id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    name: "Manhattan",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact: {
      name: "Parmin Aujla",
      position: "Warehouse Manager",
      phone: "+1 (646) 123-1234",
      email: "paujla@instock.com",
    },
  };
  console.log(data);
  return (
    <div>
      <div className="warehouse__name">
        <button>
          <img src={ArrowIcon} />
        </button>
        <h1>{data.name}</h1>
        <button>
          <img src={EditIcon} />
        </button>
      </div>
      <div className="details__top">
        <div className="details__top--address">
          <h3>WAREHOUSE ADDRESS:</h3>
          <p>{data.address}</p>
          <p>
            {data.city}, {data.country}
          </p>
        </div>
        <div className="details__top--contact">
          <div className="details__top--name">
            <h3>CONTACT NAME:</h3>
            <p>{data.contact.name}</p>
            <p>{data.contact.position}</p>
          </div>
          <div className="details__top--info">
            <h3>CONTACT INFORMATION:</h3>
            <p>{data.contact.phone}</p>
            <p>{data.contact.email}</p>
          </div>
        </div>
      </div>
      {/* <div className="inventory">
        <div className="inventory__cat">
          <h3>{this.state.inventoryitem}</h3>
          <h3>CATEGORY</h3>
          <h3>STATUS</h3>
          <h3>QTY</h3>
          <h3>ACTIONS</h3>
        </div>
        <div className="inventory__item">
          <p>Inventory Item</p>
          <p>Category</p>
          <p>Status</p>
          <p>Qty</p>
          <p>Acitons</p>
        </div>
      </div> */}
    </div>
  );
}
export default WarehouseDetails;
