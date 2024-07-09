
const { response } = require('express');

const { Sustancia, Op } = require('../../../models');

const getSustancias = async (req, res = response) => {
    try {
        const sustancias = await Sustancia.findAll({
        });
        res.status(200).json({
        ok: true,
        sustancias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const getSustanciaById = async (req, res = response) => {
    const { id } = req.params;
    try {
        const sustancias = await Sustancia.findByPk(id, {
        });
        if (!sustancias) {
        return res.status(404).json({
            ok: false,
            msg: 'Medicamento no encontrado'
        });
        }
        res.status(200).json({
        ok: true,
        sustancias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const getSustanciasByName = async (req, res = response) => {
    const { nombre } = req.query;
    try {
        const sustancias = await Sustancia.findAll({
        where: {
            nombre: {
            [Op.like]: `%${nombre}%`
            }
        },
        });
        res.status(200).json({
            ok: true,
            sustancias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports = {
    getSustancias,
    getSustanciaById,
    getSustanciasByName
};
