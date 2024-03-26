const express = require('express');
const router = rexpress.Router()

const heroController = require('../controllers/voitureController');

router.get("/", voitureController.getAllVoiture);
router.post("/", voitureController.createVoiture);
router.get("/:id", voitureController.getVoitureById);

module.exports = router;