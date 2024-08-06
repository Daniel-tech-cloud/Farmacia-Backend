// routes/laboratorio.js
// * host + /api/events/new/laboratorio

const { Router } = require('express');
const { createLaboratorio } = require('../../../controllers/events/new/laboratorio');

const router = Router();

router.post('/', createLaboratorio);


module.exports = router;