//* Rutas para usuarios
//* host + /api/auth 

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createUser, login, renew } = require('../../controllers/user/auth'); // Controladores
const { validarCampos } = require('../../middlewares/validar-campos'); // Middleware
const Usuario = require('../../models/usuario'); // Modelo

// Definición de rutas para usuario
router.post(
    '/new', 
    [  // Middlewares
        check( 'nombre', 'El nombre es obligatorio').not().isEmpty(),
        check( 'apPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
        check( 'apMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
        check('email').custom(async (email) => {
            const usuario = await Usuario.findOne({ where: { email } });
            if (usuario) {
                throw new Error('El correo ya está registrado');
            }
        }),
        check( 'pass', 'La contaseña debe ser de mínimo 8 caracteres').isLength( { min:8 } ),
        validarCampos
    ],
    createUser 
);

router.post(
    '/', 
    [  // Middlewares
        check( 'email', 'El email es obligatorio').isEmail(),
        check( 'pass', 'La contaseña es obligatoria').not().isEmpty(), 
        validarCampos
    ],
    login );

router.get('/renew', renew );

module.exports = router;
