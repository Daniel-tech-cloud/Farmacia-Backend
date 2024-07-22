const { response } = require('express');
const Presentacion = require('../../../models/presentaciones');

const getPresentaciones = async (req, res = response) => {
    try {
        const presentaciones = await Presentacion.findAll();
        res.status(200).json({ ok: true, presentaciones });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: 'Hubo un error.' });
    }
};

module.exports = {
    getPresentaciones
};
