const express = require('express');
const router = express.Router();

const BatasKecamatanController = require('.././controllers/batas-kecamatan.controller');

router.get('/:id', BatasKecamatanController.getBatasKecamatan)

module.exports = router;