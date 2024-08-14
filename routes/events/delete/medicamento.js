
// * host + /api/events/delete/medicament/

const { Router } = require('express');
const { deleteMedicament } = require('../../../controllers/events/delete/medicamento');

const router = Router();


router.delete('/:id', deleteMedicament);

module.exports = router;