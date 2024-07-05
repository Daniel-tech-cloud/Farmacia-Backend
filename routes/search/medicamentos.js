// routes/medicamento.js
const { Router } = require('express');
const { getMedicamentos, getMedicamentoById, getMedicamentosByName } = require('../../controllers/search/medicamentos');

const router = Router();

router.get('/', getMedicamentos);
router.get('/:id', getMedicamentoById);
router.get('/:nombre', getMedicamentosByName);

module.exports = router;