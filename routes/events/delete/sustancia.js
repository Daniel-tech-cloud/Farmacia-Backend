// routes/medicamento.js
// * host + /api/events/delete/sustancia/

const { Router } = require('express');
const { deleteSustancia } = require('../../../controllers/events/delete/sustancia');

const router = Router();

router.delete('/:id', deleteSustancia);

module.exports = router;