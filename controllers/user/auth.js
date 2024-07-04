
const { response } = require('express'); 
const { user } = require('../../models/usuario');

const createUser = (req, res = response) => {

    const user = new Usuario(req.body);
    console.log(user);
    
    res.status(201).json({
        ok: true,
        msg:'createUser',
        nombre, 
        email,
        pass
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