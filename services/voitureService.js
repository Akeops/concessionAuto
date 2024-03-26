const { Hero } = require("../models/voitureModel");

// CRUD

async function createVoiture(voiture) {
    // Je veux vériffier les données
    voiture.alias = hero.alias.toUpperCase();
    return await Voiture.create(voiture);
}

//Méthode
async function getVoitureById(id) {
    return await Voiture.findByPk(id);
}

async function getAllVoitures(criterias = {}) {
    const where = {}
    // where.alias !== undefined && (where.alias = criterias.alias);
    if (criterias.marque) {
        where.identity = criterias.identity
    }
    if (criterias.alias) {
        where.alias = criterias.alias;
    }
    return await Voiture.findAll({ where });

}

module.exports = { createVoiture, getVoitureById, getAllVoitures }