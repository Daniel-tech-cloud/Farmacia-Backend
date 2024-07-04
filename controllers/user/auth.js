const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../../models/usuario');

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
        const usuario = new Usuario({ nombre, email, pass, apPaterno, apMaterno, idRol });

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.pass = bcrypt.hashSync(pass, salt);

        // Guardar usuario en la base de datos
        await usuario.save();

        res.status(201).json({
        ok: true,
        msg: 'Usuario creado con éxito'
        });

    } catch (error) {
        console.log(error);
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

        res.json({
        ok: true,
        msg: `Bienvenido ${ usuario.nombre } ${ usuario.apPaterno }`
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
        ok: false,
        msg: 'Por favor hable con el administrador'
        });
    }
}

const renew = (req, res = response) => {
    res.json({
        ok: true,
        msg:'renew'
    });
}

module.exports = {
    createUser, 
    login, 
    renew
}
