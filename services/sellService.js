const { Car } = require("../models/sellModel");

// CRUD

async function createSell(sell) {
    return await Sell.create(sell);
}

//Méthode
async function getSellsById(id) {
    return await Sell.findByPk(id);
}

async function getAllSells(criterias = {}) {
    const where = {}
    // where.alias !== undefined && (where.alias = criterias.alias);
    if (criterias.ID_sells) {
        where.model = criterias.model;
    }
    if (criterias.ID_cars) {
        where.year = criterias.year;
    }
    if (criterias.ID_customers) {
        where.price = criterias.price;
    }
    if (criterias.type) {
        where.type = criterias.type;
    }
    if (criterias.status) {
        where.status = criterias.status;
    }
    return await Sell.findAll({ where });

}

module.exports = { createSell, getSellsById, getAllSells }