const { db } = require("./db");

const { DataTypes } = require("sequelize");

const Customer = db.define("Customer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    // timestamps: false,
});

module.exports = { Customer };