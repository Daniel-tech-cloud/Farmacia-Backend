// routes/medicamento.js
// * host + /api/events/search/sustancias/

const { Router } = require('express');
const { getSustancias, getSustanciaById, getSustanciasByName } = require('../../../controllers/events/search/sustancias');

const router = Router();

router.get('/', getSustancias);
router.get('/search', getSustanciasByName);
// router.get('/:id', getSustanciaById);

module.exports = router;