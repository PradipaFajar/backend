const express = require('express');
const router = express.Router();

const BatasKeluarahanController = require('.././controllers/batas-kelurahan.controller');

router.get('/:id', BatasKeluarahanController.getBatasKelurahan)

module.exports = router;