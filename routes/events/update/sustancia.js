// routes/medicamento.js
// * host + /api/events/update/sustancia/

const { Router } = require('express');
const { updateSustancia } = require('../../../controllers/events/update/sustancia.js');

const router = Router();

router.put('/:id', updateSustancia);

module.exports = router;