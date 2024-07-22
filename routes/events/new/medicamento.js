// routes/medicamento.js
// * host + /api/events/new/medicament/

const { Router } = require('express');
const { createMedicament } = require('../../../controllers/events/new/medicamento');

const router = Router();


router.post('/', createMedicament);

module.exports = router;