const express = require('express');
const router = express.Router();

const kalaulang1Controller = require('.././controllers/kalaulang1.controller');

router.get('/:id', kalaulang1Controller.getKalaUlang1)

module.exports = router;