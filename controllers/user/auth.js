
const { response } = require('express'); 

const createUser = (req, res = response) => {

    const { nombre, apPaterno, apMaterno, email, pass } = req.body;

    if(nombre.length == 0 || apPaterno.length == 0 || apMaterno.length == 0){
        return res.status(400).json({
            ok: false,
            msg: 'No se permiten campos vacios.'
        });
    }


    res.json({
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