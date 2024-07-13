const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../../models/usuario');
const { generarJWT } = require('../../helpers/jwt');

const createUser = async (req, res = response) => {
    const { nombre, email, pass, apPaterno, apMaterno, idRol } = req.body;

    try {
        // Verificar si el correo ya existe
        const existeEmail = await Usuario.findOne({ where: { email } });
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        // Crear usuario
        const usuario = new Usuario({ idRol, nombre, apPaterno, apMaterno, email, pass });

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.pass = bcrypt.hashSync(pass, salt);

        // Guardar usuario en la base de datos
        await usuario.save();
        
        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.nombre);

        console.log('Usuario creado y token generado');

        res.status(201).json({
            ok: true,
            msg: 'Usuario creado con éxito',
            token
            
        });

    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const login = async (req, res = response) => {
    const { email, pass } = req.body;

    try {
        // Verificar si el usuario existe
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario o la contraseña no son correctos'
            });
        }
        
        // Verificar la contraseña
        const validPassword = bcrypt.compareSync(pass, usuario.pass);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario o la contraseña no son correctos'
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.nombre);

        res.status(200).json({
            ok: true,
            msg: 'Bienvenido',
            nombre: usuario.nombre,
            apPaterno: usuario.apPaterno,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const renew = async (req, res = response) => {

    const { id, nombre } = req;

    // Generar nuevo JWT 
    const token = await generarJWT(id, nombre);

    res.json({
        ok: true,
        token
    });
}

module.exports = {
    createUser, 
    login, 
    renew
}
