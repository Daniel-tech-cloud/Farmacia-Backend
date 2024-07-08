// routes/laboratorio.js
// * host + /api/events/search/laboratorios/

const { Router } = require('express');
const { getLaboratorios, getLaboratorioById, getLaboratoriosByName } = require('../../../controllers/events/search/laboratorios');

const router = Router();

router.get('/', getLaboratorios);
// router.get('/:id', getLaboratorioById);
router.get('/search', getLaboratoriosByName);

module.exports = router;