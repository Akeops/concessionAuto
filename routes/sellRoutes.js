const express = require('express');
const router = express.Router()

const sellController = require('../controllers/sellController');

router.get("/", sellController.getAllSells);
router.post("/", sellController.createSell);
router.get("/:id", sellController.getSellById);

module.exports = router;