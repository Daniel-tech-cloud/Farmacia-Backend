// routes/medicamento.js
// * host + /api/events/search/medicamentos/

const { Router } = require('express');
const { getMedicamentos, getMedicamentoById, getMedicamentosByName } = require('../../../controllers/events/search/medicamentos');

const router = Router();

router.get('/', getMedicamentos);
router.get('/:id', getMedicamentoById);
router.get('/:nombre', getMedicamentosByName);

module.exports = router;