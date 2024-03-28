const { Customer } = require("./customerModel");
const { Car } = require("./carModel");

// Associations

Customer.hasMany(Car);
Car.belongsTo(Customer);

module.exports = { Car, Customer };