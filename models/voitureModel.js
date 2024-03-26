const { db } = require("./db");

const { DataTypes } = require("sequelize");

const Voiture = db.define("Voiture", {
    marque: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modele: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    annee: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    // timestamps: false,
});

module.exports = { Voiture };