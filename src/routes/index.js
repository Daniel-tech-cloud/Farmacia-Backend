const express = require('express');
const router = express.Router();

// Importar los routers de cada módulo
const verTodoslosLaboratorios = require('./laboratorio/laboratorios');
const busquedaLaboratorioPorId = require('./laboratorio/busquedaLaboratorioPorId');
const nombreDeLaboratorio = require('./Laboratorio/busquedaNombreLaboratorios');
const nombreDeMedicamento = require('./Medicamento/busquedaNombreMedicamentos');
const verTodasLasSustancias = require('./Sustancia/busquedaSustanciaActiva');
const medicamentoPorId = require('./Medicamento/busquedaMedicamentoPorId');
const sustanciaPorId = require('./Sustancia/busquedaSustanciaPorId');

// Usar los routers con una ruta base
router.use('/laboratorios', verTodoslosLaboratorios);
router.use('/busqueda/medicina', medicamentoPorId);
router.use('/busqueda/medicamento', nombreDeMedicamento);
router.use('/busqueda/laboratorio', nombreDeLaboratorio);
router.use('/busqueda/lab', busquedaLaboratorioPorId);
router.use('/busqueda/sus', sustanciaPorId);
router.use('/busqueda/sustancia', verTodasLasSustancias);
// Agregar aquí otros routers

module.exports = router;
