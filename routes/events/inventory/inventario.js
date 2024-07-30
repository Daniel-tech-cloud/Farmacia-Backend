// routes/medicamento.js
// * host + /api/events/inventory/

const { Router } = require('express');
const { addInventario, getAllInventario, updateInventario, deleteInventario } = require('../../../controllers/events/inventory/inventarioController');

const router = Router();

router.post('/add', addInventario);
router.get('/', getAllInventario);
router.put('/:id', updateInventario);
router.delete('/:id', deleteInventario);

module.exports = router;