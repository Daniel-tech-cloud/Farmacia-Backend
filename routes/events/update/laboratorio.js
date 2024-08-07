// routes/laboratorio.js
// * host + /api/events/update/laboratorio

const { Router } = require('express');
const { updateLaboratorio } = require('../../../controllers/events/update/laboratorio.js');

const router = Router();

router.put('/:id', updateLaboratorio);


module.exports = router;