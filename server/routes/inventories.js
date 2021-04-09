<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const app = express();
=======
const router = require("express").Router();
>>>>>>> e46beaf149a0dff80e41501192660dfff25a98ed
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

router.get("/", (req, res) => {
  const inventoryList = (filePath) => {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  };
  let list = inventoryList(`${path}/inventories.json`);
  res.send(list);
});

router.get("/edit/:id", (req, res) => {
  const inventoriesData = fs.readFileSync(path + "/inventories.json", "utf-8");
  const inventoriesArr = JSON.parse(inventoriesData);
  const singleInventories = inventoriesArr.find(
    (item) => item.id === req.params.id
  );
  res.send(singleInventories);
});

module.exports = router;
