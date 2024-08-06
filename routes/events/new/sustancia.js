// routes/medicamento.js
// * host + /api/events/new/sustancia/

const { Router } = require('express');
const { createSustancia } = require('../../../controllers/events/new/sustancia');

const router = Router();

router.post('/', createSustancia);

module.exports = router;