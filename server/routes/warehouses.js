const router = require("express").Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const path = require("path").resolve(__dirname, "../data/warehouses.json");
// get request for a single warehouse
router.get("/edit/:id", (req, res) => {
  //   console.log(res);
  console.log(path);
  const warehousesData = fs.readFileSync(path, "utf-8");
  const warehouseArr = JSON.parse(warehousesData);
  const singleWarehouse = warehouseArr.find(
    (item) => item.id === req.params.id
  );
  res.send(singleWarehouse);
});

// PUT - FOR EDITING A WAREHOUSE

router.put(
  "/edit/:id",
  //  [
  //     !check('warehouseName').isEmpty(),
  //     !check('address').isEmpty(),
  //     !check('city').isEmpty(),
  //     !check('country').isEmpty(),
  //     !check('contactName').isEmpty(),
  //     !check('position').isEmpty(),
  //     check('phone').isMobilePhone(),
  //     check('email').isEmail()

  // ],
  (request, response) => {
    // const errors = validationResult(request);
    // if (!errors.isEmpty()) {
    //     return response.status(522).json({ errors: errors.array() })
    // }

    response
      .status(201)
      .send("Validation passed and here's the id you need to update");

    // // READ THE JSON FILE AND PARSE
    // fs.readFile(`${path}/warehouses.json`, 'utf8', (error, warehouseData => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }
    //     warehouseData = JSON.parse(warehouseData);

    //     //FIND WAREHOUSE BY ID
    //     let currentWarehouse = warehouseData.find((warehouse) => warehouse.ed == request.params.id);

    //     //UPDATE VALUES IN CURRENT WAREHOUSE WITH NEW VALUES
    //     const currentWarehouse = {
    //         warehouseName: request.body.warehouseName,
    //         address: request.body.name,
    //         city: request.body.city,
    //         country: request.body.country,
    //         contactName: request.body.contactName,
    //         position: request.body.position,
    //         phone: request.body.phone,
    //         email: request.body.email
    //     }

    //     //WRITE UPDATED DATA TO FILE
    //     warehouseData.stringify(warehouseData);

    //     try {
    //         fs.writeFile(`${path}/warehouses.json`, warehouseData, (error) => {
    //             if (error) {
    //                 console.error(error);
    //                 return;
    //             }
    //             response.status(201).send("warehouse updated");
    //         });
    //     } catch (error) {
    //         response.status(501).json({
    //             error: error.message,
    //         })
    //     }
    // }))
  }
);

module.exports = router;
