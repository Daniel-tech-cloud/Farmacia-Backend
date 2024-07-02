
//* Rutas para eventos de busqueda
//* host + /api/events/search 

const express = require('express');
const router = express.Router();
const { busquedaMedicina, busquedaLaboratorio, busquedaSustancia } = require('../../controllers/events/search');

// Definición de rutas para la búsqueda
router.get('/medicina', busquedaMedicina);
router.get('/laboratorio', busquedaLaboratorio );
router.get('/sustancia', busquedaSustancia);


module.exports = router;
