const customerService = require('../services/customerService');

async function getCustomerById(req, res) {
    try {
        const id = req.params.id;

        const car = await carService.getCustomerById(id);
        if (car) {
            res.json(car);
        } else {
            res.json({ error: `Customer not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

async function getAllCustomers(req, res) {
    try {
        const { identity, alias } = req.query;
        const customers = await cutomerService.getAllCustomer({identity, alias});
        res.json(customers);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createCustomer(req, res) {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getCustomerById,
    getAllCustomers,
    createCustomer
}