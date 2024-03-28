const express = require('express');
const router = express.Router()

const customerController = require('../controllers/customerController');

router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/:id", customerController.getCustomerById);

// /:id/car (POST)
    // /api/v1/customers/:id/car
    {
        idCar: 2
    }

module.exports = router;