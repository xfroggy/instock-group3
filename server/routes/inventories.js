const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");
const { v4: uuidv4 } = require("uuid");

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

// get request for list of Inventories
router.get("/:id", (req, res) => {
  const inventoriesData = fs.readFileSync(path + "/inventories.json", "utf-8");
  const inventoriesArr = JSON.parse(inventoriesData);
  const inventories = inventoriesArr.find(
    (items) => items.warehouseID === req.params.id
  );
  res.send(inventories);
});

router.post("/newitem", (request, response) => {
  fs.readFile(`${path}/inventories.json`, "utf8", (err, inventoryData) => {
    if (err) {
      console.error(err);
      return;
    }

    inventoryData = JSON.parse(inventoryData);
    inventoryData.push({
      id: uuidv4(),
      name: request.body.inventoryName,
      category: request.body.category,
      description: request.body.description,
      status: request.body.status,
      quantity: request.body.quantity,
    });
    inventoryData = JSON.stringify(inventoryData);

    try {
      fs.writeFile(`${path}/inventories.json`, inventoryData, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        response.status(201).send("inventory added");
      });
    } catch (error) {
      response.status(500).json({
        error: error.message,
      });
    }
  });
});

module.exports = router;

router.delete("/delete/:id", (request, response) => {
  // READ THE JSON FILE AND PARSE
  fs.readFile(`${path}/inventories.json`, "utf8", (err, inventoryData) => {
    if (err) {
      console.error(err);
      return;
    }
    inventoryData = JSON.parse(inventoryData);

    //FIND ITEM BY ID

    let currentIdIndex = inventoryData.findIndex(
      (obj) => obj.id == request.params.id
    );

    console.log("Current ID Index: ", currentIdIndex);

    //UPDATE VALUES IN CURRENT WAREHOUSE WITH NEW VALUES
    inventoryData.splice(currentIdIndex);

    //WRITE UPDATED DATA TO FILE
    inventoryData = JSON.stringify(inventoryData);

    try {
      fs.writeFile(`${path}/inventories.json`, inventoryData, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        response.status(201).send("inventory updated");
      });
    } catch (error) {
      response.status(501).json({
        error: error.message,
      });
    }
  });
});
