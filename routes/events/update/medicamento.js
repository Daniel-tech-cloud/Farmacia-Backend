// routes/medicamento.js
// * host + /api/events/update/medicament/

const { Router } = require('express');
const { updateMedicament, upload } = require('../../../controllers/events/update/medicamento.js');

const router = Router();


router.put('/:id', upload.single('imagen'), updateMedicament);

module.exports = router;