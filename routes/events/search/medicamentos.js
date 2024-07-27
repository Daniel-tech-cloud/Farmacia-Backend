// routes/medicamento.js
// * host + /api/events/search/medicamentos/

const { Router } = require('express');
const { getMedicamentos, getMedicamentoById, getMedicamentosByName } = require('../../../controllers/events/search/medicamentos');

const router = Router();

router.get('/', getMedicamentos);
router.get('/search', getMedicamentosByName);
router.get('/:id', getMedicamentoById);

module.exports = router;