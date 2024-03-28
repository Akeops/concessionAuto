const { Car, Customer } = require("../models/associations");
// const { Customer } = require("../associations");

// CRUD

// async function getCustomerByCarID(kid) {

    //// }

async function createCar(car) {
    return await Car.create(car);
}

//Méthode
async function getCarsById(id) {
    return await Car.findByPk(id, {
        included: Customer
    });
}

async function addCarToCustomer(idCar, idCustomer) {
    const car = getCarsById(idCar);

    car.setCustomer(idCustomer);
}

async function getAllCars(criterias = {}) {
    const where = {}
    // where.alias !== undefined && (where.alias = criterias.alias);
    if (criterias.brand) {
        where.brand = criterias.brand;
    }
    if (criterias.model) {
        where.model = criterias.model;
    }
    if (criterias.year) {
        where.year = criterias.year;
    }
    if (criterias.price) {
        where.price = criterias.price;
    }
    if (criterias.type) {
        where.type = criterias.type;
    }
    if (criterias.status) {
        where.status = criterias.status;
    }
    return await Car.findAll({ where });

}

module.exports = { createCar, getCarsById, getAllCars, addCarToCustomer }