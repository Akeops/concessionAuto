const { db } = require("./db");

const { DataTypes } = require("sequelize");

const Sell = db.define("Sell", {
    ID_sells: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ID_cars: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ID_customers: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    selling_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    selling_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
},{
    // timestamps: false,
});

module.exports = { Sell };