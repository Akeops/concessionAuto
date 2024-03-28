const { Car, Customer } = require("../models/associations");

// CRUD

async function createCustomer(customer) {
    return await Customer.create(customer);
}

//Méthode
async function getCustomerById(id) {
    return await Customer.findByPk(id, {
        include: Car
    });
}

async function getAllCustomers(criterias = {}) {
    const where = {}
    // where.alias !== undefined && (where.alias = criterias.alias);
    if (criterias.name) {
        where.name = criterias.name;
    }
    if (criterias.firstname) {
        where.firstname = criterias.firstname;
    }
    if (criterias.email) {
        where.email = criterias.email;
    }
    if (criterias.phone) {
        where.phone = criterias.phone;
    }
    if (criterias.adress) {
        where.adress = criterias.adress;
    }
    return await Customer.findAll({ where });

}

module.exports = { createCustomer, getCustomerById, getAllCustomers }