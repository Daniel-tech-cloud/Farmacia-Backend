
const { response } = require('express'); 
const Usuario = require('../../models/usuario');

const createUser = async (req, res = response) => {

    const usuario = new Usuario(req.body);
    // console.log(usuario);
    await usuario.save();
    
    res.status(201).json({
        ok: true,
        msg:'Usuario creado',
    });
}

const login = (req, res = response) => {
    const { email, pass } = req.body;
    res.json({
        ok: true,
        msg:'login', 
        email,
        pass
    });
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