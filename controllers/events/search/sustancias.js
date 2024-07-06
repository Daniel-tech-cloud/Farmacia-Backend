
const { response } = require('express');
const Sustancia = require('../../../models/sustancias');
const Presentacion = require('../../../models/presentaciones');
const Laboratorio = require('../../../models/laboratorios');


const getSustancias = async (req, res = response) => {
    try {
        const Sustancias = await Sustancia.findAll({
        });
        res.status(200).json({
        ok: true,
        Sustancias
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
        const sustancia = await Sustancia.findByPk(id, {
        });
        if (!sustancia) {
        return res.status(404).json({
            ok: false,
            msg: 'Medicamento no encontrado'
        });
        }
        res.status(200).json({
        ok: true,
        sustancia
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
        const sustancia = await Sustancia.findAll({
        where: {
            nombre: {
            [Op.like]: `%${nombre}%`
            }
        },
        });
        res.status(200).json({
        ok: true,
        Sustancias
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
