
const express = require('express');
const router = express.Router();

const { createUser, login, renew } = require('../../controllers/user/auth');

//* Rutas para usuarios
//* host + /api/auth 

// Definición de rutas para usuario
router.post('/new', createUser );
router.post('/', login );
router.get('/renew', renew );

module.exports = router;
