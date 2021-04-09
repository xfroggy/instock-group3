const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

router.get("/", (req, res) => {
  console.log(res);
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
