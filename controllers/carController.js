const carService = require('../services/carService');


async function getCarById(req, res) {
    try {
        const id = req.params.id;

        const car = await carService.getCarById(id);
        if (car) {
            res.json(car);
        } else {
            res.json({ error: `Car not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

async function getAllCars(req, res) {
    try {
        const { identity, alias } = req.query;
        const cars = await carService.getAllCars({});
        res.json(cars);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createCar(req, res) {
    try {
        const car = await carService.createCar(req.body);
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function addCarToCustomer(req, res) {
    const { idCustomer } = req.query;
    const { idCar } = req.body;

    carService.addCarToCustomer(idCar, idCustomer);
    res.json({idCustomer, idCar});
}

module.exports = {
    getCarById,
    getAllCars,
    createCar
}