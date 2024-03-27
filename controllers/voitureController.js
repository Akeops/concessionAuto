const heroService = require('../services/voitureService');

async function getVoitureById(req, res) {
    try {
        const id = req.params.id;

        const hero = await heroService.getHeroById(id);
        if (hero) {
            res.json(hero);
        } else {
            res.json({ error: `Hero not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

async function getAllVoitures(req, res) {
    try {
        const { identity, alias } = req.query;
        const heroes = await heroService.getAllVoitures({identity, alias});
        res.json(heroes);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createHero(req, res) {
    try {
        const hero = await heroService.createHero(req.body);
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getHeroById,
    getAllHeroes,
    createHero
}