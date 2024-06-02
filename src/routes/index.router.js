const express = require('express');
const router = express.Router();

const SungaiRouter = require('./sungai.route');
const AuthRouter = require('./auth.route');
const BatasKotaRouter = require('./batas-kota.route');
const BatasKecamatanRouter = require('./batas-kec.route');
const BatasKeluarahanRouter = require('./batas-kel.route');
const KalaUlang1Router = require('./kalul1.route');

router.use('/sungai', SungaiRouter);
router.use('/auth', AuthRouter);
router.use('/bataskota', BatasKotaRouter);
router.use('/bataskecamatan', BatasKecamatanRouter);
router.use('/bataskelurahan', BatasKeluarahanRouter);
router.use('/kalaUlang1', KalaUlang1Router);

// const AdminRouter = require('./admin.router')

// router.use('/admin', AdminRouter)

module.exports = router;