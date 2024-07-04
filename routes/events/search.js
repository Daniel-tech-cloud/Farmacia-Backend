
//* Rutas para eventos de busqueda
//* host + /api/events/search 

const express = require('express');
const router = express.Router();
const { getMedicamentos, getLaboratorios, getSustancias } = require('../../controllers/events/search');

// Definición de rutas para la búsqueda
router.get('/medicamentos', getMedicamentos);
router.get('/laboratorios', getLaboratorios );
router.get('/sustancias', getSustancias);

module.exports = router;
