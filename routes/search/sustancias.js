// routes/medicamento.js
const { Router } = require('express');
const { getSustancias, getSustanciaById, getSustanciasByName } = require('../../controllers/search/sustancias');

const router = Router();

router.get('/', getSustancias);
router.get('/:id', getSustanciaById);
router.get('/search', getSustanciasByName);

module.exports = router;