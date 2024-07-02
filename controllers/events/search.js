
const express = require('express');

const busquedaMedicina = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Busqueda medicina'
    });
}

const busquedaLaboratorio = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Busqueda laboratorio'
    });
}
const busquedaSustancia = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Busqueda sustancia'
    });
}


module.exports = {
    busquedaMedicina,
    busquedaLaboratorio,
    busquedaSustancia
}

