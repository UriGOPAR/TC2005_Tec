const express = require('express');

const router = express.Router();

const hasCreate = require ('../util/has-create');

const peliculasController = require('../controllers/peliculas.controller');

router.get('/buscar/:valor_busqueda', peliculasController.get_buscar);

router.get('/editar/:id', hasCreate, peliculasController.get_editar);

router.get('editar', hasCreate, peliculasController.get_nueva);

router.post('editar', hasCreate,peliculasController.post_nueva);

router.get('/nueva', hasCreate, peliculasController.get_nueva);

router.post('/nueva', hasCreate, peliculasController.post_nueva);

router.get('/: id', peliculasController.listara);

router.get('/1', peliculasController.listara);

module.exports = router;