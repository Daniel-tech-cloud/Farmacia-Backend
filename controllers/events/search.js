
const express = require('express');

const busquedaMedicina = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Búsqueda medicina'
    });
}

const busquedaLaboratorio = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Búsqueda laboratorio'
    });
}

const busquedaSustancia = (req, res = express.response) => {
    res.json({
        ok: true,
        msg:'Búsqueda sustancia'
    });
}

module.exports = {
    busquedaMedicina,
    busquedaLaboratorio,
    busquedaSustancia
}

