const express = require('express');

const router = express.Router();

const peliculasController = require('../controllers/peliculas.controller');

router.get('/nueva', peliculasController.get_nueva);

router.post('/nueva', peliculasController.post_nueva);

router.get('/1', peliculasController.listara);

module.exports = router;