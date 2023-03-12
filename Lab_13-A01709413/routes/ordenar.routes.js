const express = require('express');
const router = express.Router();
const filesystem =require ('fs');

const ordenarController = require('../controllers/ordenar.controller');

router.get('/pedir', ordenarController.getPedir);

router.get('/adoptar', ordenarController.getAdoptar);

router.get('/registro', ordenarController.getRegistro);

router.post('/registro', ordenarController.postRegistro);

router.get('/datos', ordenarController.getDatos);

router.post('/datos', ordenarController.postDatos);


module.exports=router;