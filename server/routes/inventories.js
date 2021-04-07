const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

router.get("/", (req, res) => {
  const inventoryList = (filePath) => {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  };
  let list = inventoryList(`${path}/inventories.json`);
  res.send(list);
  console.log(list);
});
module.exports = router;
