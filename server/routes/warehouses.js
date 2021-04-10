const router = require("express").Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const path = require("path").resolve(__dirname, "../data");
const { v4: uuidv4 } = require("uuid");

// get request for a single warehouse
router.get("/edit/:id", (req, res) => {
  // console.log(path+"/warehouses.json");
  const warehousesData = fs.readFileSync(path + "/warehouses.json", "utf-8");
  const warehouseArr = JSON.parse(warehousesData);
  const singleWarehouse = warehouseArr.find(
    (item) => item.id === req.params.id
  );
  res.send(singleWarehouse);
});

//GET - List all warehouses

router.get("/", (req, res) => {
  const warehouseList = (filePath) => {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  };
  let list = warehouseList(`${path}/warehouses.json`);
  res.send(list);
});

// POST - ADD A WAREHOUSE

router.post(
  "/add",
  [
    check("warehouseName").not().isEmpty(),
    check("address").not().isEmpty(),
    check("city").not().isEmpty(),
    check("country").not().isEmpty(),
    check("contactName").not().isEmpty(),
    check("position").not().isEmpty(),
    check("phone").isMobilePhone(["en-US"]),
    check("email").isEmail(),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(522).json({ errors: errors.array() });
    }
    response
      .status(201)
      .send(
        `Validation passed and here's the id you need to update:  ${request.body.warehouseName}, ${request.body.address}, ${request.body.city},${request.body.country},${request.body.contactName}, ${request.body.position}, ${request.body.phone}, ${request.body.email}`
      );

    // READ THE JSON FILE AND PARSE
    fs.readFile(`${path}/warehouses.json`, "utf8", (err, warehouseData) => {
      if (err) {
        console.error(err);
        return;
      }
      warehouseData = JSON.parse(warehouseData);

      //UPDATE VALUES IN CURRENT WAREHOUSE WITH NEW VALUES
      warehouseData.push({
        id: uuidv4(),
        name: request.body.warehouseName,
        address: request.body.address,
        city: request.body.city,
        country: request.body.country,
        contact: {
          name: request.body.contactName,
          position: request.body.position,
          phone: request.body.phone,
          email: request.body.email,
        },
      });

      //WRITE UPDATED DATA TO FILE
      warehouseData = JSON.stringify(warehouseData);

      try {
        fs.writeFile(`${path}/warehouses.json`, warehouseData, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          response.status(201).send("warehouse added");
        });
      } catch (error) {
        response.status(501).json({
          error: error.message,
        });
      }
    });
  }
);

// PUT - FOR EDITING A WAREHOUSE

router.put(
  "/edit/:id",
  [
    check("warehouseName").not().isEmpty(),
    check("address").not().isEmpty(),
    check("city").not().isEmpty(),
    check("country").not().isEmpty(),
    check("contactName").not().isEmpty(),
    check("position").not().isEmpty(),
    check("phone").isMobilePhone(["en-US"]),
    check("email").isEmail(),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(522).json({ errors: errors.array() });
    }
    response
      .status(201)
      .send(
        `Validation passed and here's the id you need to update: ${request.params.id}, ${request.body.warehouseName}, ${request.body.address}, ${request.body.city},${request.body.country},${request.body.contactName}, ${request.body.position}, ${request.body.phone}, ${request.body.email}`
      );

    // READ THE JSON FILE AND PARSE
    fs.readFile(`${path}/warehouses.json`, "utf8", (err, warehouseData) => {
      if (err) {
        console.error(err);
        return;
      }
      warehouseData = JSON.parse(warehouseData);

      //FIND WAREHOUSE BY ID

      let currentIdIndex = warehouseData.findIndex(
        (obj) => obj.id == request.params.id
      );

      console.log(currentIdIndex);

      //UPDATE VALUES IN CURRENT WAREHOUSE WITH NEW VALUES
      warehouseData.splice(currentIdIndex, 1, {
        id: request.params.id,
        name: request.body.warehouseName,
        address: request.body.address,
        city: request.body.city,
        country: request.body.country,
        contact: {
          name: request.body.contactName,
          position: request.body.position,
          phone: request.body.phone,
          email: request.body.email,
        },
      });

      //WRITE UPDATED DATA TO FILE
      warehouseData = JSON.stringify(warehouseData);

      try {
        fs.writeFile(`${path}/warehouses.json`, warehouseData, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          response.status(201).send("warehouse updated");
        });
      } catch (error) {
        response.status(501).json({
          error: error.message,
        });
      }
    });
  }
);

module.exports = router;
