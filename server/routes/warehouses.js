const router = require("express").Router();
const fs = require("fs");
const { check, validationResult } = require('express-validator');
const path = require('path').resolve(__dirname, '../data');

router.get("/", (req, res) => {
    console.log(res);
});

// PUT - FOR EDITING A WAREHOUSE

router.put("/edit/:id",
    [
        check('warehouseName').not().isEmpty(),
        check('address').not().isEmpty(),
        check('city').not().isEmpty(),
        check('country').not().isEmpty(),
        check('contactName').not().isEmpty(),
        check('position').not().isEmpty(),
        check('phone').isMobilePhone(['en-US']),
        check('email').isEmail()

    ],
    (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(522).json({ errors: errors.array() })
        }
        response.status(201).send(`Validation passed and here's the id you need to update: ${request.params.id}, ${request.body.warehouseName}, ${request.body.address}, ${request.body.city},${request.body.country},${request.body.contactName}, ${request.body.position}, ${request.body.phone}, ${request.body.email}`);

        // // READ THE JSON FILE AND PARSE
        fs.readFile(`${path}/warehouses.json`, 'utf8', ((err, warehouseData) => {
            if (err) {
                console.error(err);
                return;
            }
            warehouseData = JSON.parse(warehouseData);


            //FIND WAREHOUSE BY ID
            // let currentWarehouse = warehouseData.find((warehouse) => warehouse.ed == request.params.id);


            let currentIdIndex = warehouseData.findIndex((obj => obj.id == request.params.id));

            console.log(currentIdIndex);


            //UPDATE VALUES IN CURRENT WAREHOUSE WITH NEW VALUES
            warehouseData.splice(currentIdIndex, 1,
                {
                    id: request.params.id,
                    name: request.body.warehouseName,
                    address: request.body.address,
                    city: request.body.city,
                    country: request.body.country,
                    contact: {
                        name: request.body.contactName,
                        position: request.body.position,
                        phone: request.body.phone,
                        email: request.body.email
                    }
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
                })
            }
        }))
    });

module.exports = router;


