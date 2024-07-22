// routes/medicamento.js
// * host + /api/events/search/medicamentos/

const { Router } = require('express');
const { getPresentaciones } = require('../../../controllers/events/search/presentaciones');

const router = Router();

router.get('/', getPresentaciones);
module.exports = router;