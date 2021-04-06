const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const inventoryRoutes = require("./server/routes/inventories");
const warehouseRoutes = require("./server/routes/warehouses");

app.use(cors());

app.use(express.json());

app.use("/api/warehouses/", warehouseRoutes);

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});


