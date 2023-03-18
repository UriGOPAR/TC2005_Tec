const express = require('express');

const router = express.Router();

const ConocemeController = require('../controllers/sobremi.controller');

router.get('/conoceme', ConocemeController.getConoceme);
router.get('/bandas', ConocemeController.getBandas);

module.exports = router;