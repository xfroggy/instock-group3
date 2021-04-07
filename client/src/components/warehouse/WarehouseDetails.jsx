import React, { useState } from "react";

const data = {
  inventoryitem: "TV",
  category: "electronics",
  status: "instock",
  qty: 100,
  action: "delete",
};

function warehouseDetails() {
  useState = { data };

  return (
    <div>
      <div className="details__top">
        <div className="details__top--address">
          <h3>WAREHOUSE ADDRESS:</h3>
          <p>address</p>
        </div>
        <div className="details__top--contact">
          <div className="details__top--name">
            <h3>CONTACT NAME:</h3>
            <p>Name</p>
            <p>Position</p>
          </div>
          <div className="details__top--info">
            <h3>CONTACT INFORMATION:</h3>
            <p>Phone Number</p>
            <p>email</p>
          </div>
        </div>
      </div>
      <div className="inventory">
        <div className="inventory__cat">
          {/* <h3>{this.state.inventoryitem}</h3> */}
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
      </div>
    </div>
  );
}
