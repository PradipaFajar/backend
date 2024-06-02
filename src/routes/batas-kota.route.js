const express = require('express');
const router = express.Router();

const BatasKotaController = require('.././controllers/batas-kota.controller');

router.get('/:id', BatasKotaController.getBatasKota)

module.exports = router;