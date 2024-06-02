const express = require('express');
const router = express.Router();

const SungaiController = require('.././controllers/sungai.controller');

router.get('/getGeomById/:id', SungaiController.getGeomById)
router.get('/getAllData', SungaiController.getAllData);
router.get('/getAllGeom', SungaiController.getGeoJSON);
router.get('/getGeomByName', SungaiController.getGeomByName);
router.get('/getGeomByDate', SungaiController.getGeomByDate);
router.get('/getGeomByDateApprove', SungaiController.getGeomByDateApproved);
router.get('/getGeomByDateApproveTable', SungaiController.getGeomByDateApprovedTable);
router.delete('/delete/:id', SungaiController.deleteById);
router.get('/approve', SungaiController.approveGeomByDate);
router.get('/reject', SungaiController.unApproveGeomByDate);

module.exports = router;