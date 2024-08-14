
// * host + /api/events/delete/laboratorio

const { Router } = require('express');
const { deleteLaboratorio } = require('../../../controllers/events/delete/laboratorio');

const router = Router();

router.delete('/:id', deleteLaboratorio);


module.exports = router;