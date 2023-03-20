const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');
const peliculasController = require('../controllers/peliculas.controller');

router.get('/nueva', hasCreate, peliculasController.get_nueva);

router.post('/nueva', hasCreate, peliculasController.post_nueva);

router.get('/:id', peliculasController.listara);

router.get('/1', peliculasController.listara);

module.exports = router;