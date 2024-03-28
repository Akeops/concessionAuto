const sellService = require('../services/sellService');

async function getSellById(req, res) {
    try {
        const id = req.params.id;

        const sell = await sellService.getSellById(id);
        if (sell) {
            res.json(sell);
        } else {
            res.json({ error: `Sell not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

async function getAllSells(req, res) {
    try {
        const { identity, alias } = req.query;
        const sells = await sellService.getAllSells({identity, alias});
        res.json(sells);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createSell(req, res) {
    try {
        const sell = await sellService.createSell(req.body);
        res.json(sell);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getSellById,
    getAllSells,
    createSell
}