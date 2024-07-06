// controllers/medicamento.js
const { response } = require('express');
const Medicamento = require('../../../models/medicamento');
const Sustancia = require('../../../models/sustancias');
const Presentacion = require('../../../models/presentaciones');
const Laboratorio = require('../../../models/laboratorios');

const getMedicamentos = async (req, res = response) => {
    try {
        const medicamentos = await Medicamento.findAll({
        include: [
            { model: Sustancia, as: 'sustancias' },
            { model: Presentacion, as: 'presentaciones' },
            { model: Laboratorio, as: 'laboratorios' }
        ]
        });
        res.status(200).json({
        ok: true,
        medicamentos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        ok: false,
        msg: 'Por favor hable con el administrador'
        });
    }
}

const getMedicamentoById = async (req, res = response) => {
    const { id } = req.params;
    try {
        const medicamento = await Medicamento.findByPk(id, {
        include: [
            { model: Sustancia, as: 'sustancias' },
            { model: Presentacion, as: 'presentaciones' },
            { model: Laboratorio, as: 'laboratorios' }
        ]
        });
        if (!medicamento) {
        return res.status(404).json({
            ok: false,
            msg: 'Medicamento no encontrado'
        });
        }
        res.status(200).json({
        ok: true,
        medicamento
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        ok: false,
        msg: 'Por favor hable con el administrador'
        });
    }
}

const getMedicamentosByName = async (req, res = response) => {
    const { nombre } = req.query;
    try {
        const medicamentos = await Medicamento.findAll({
        where: {
            nombre: {
            [Op.like]: `%${nombre}%`
            }
        },
        include: [
            { model: Sustancia, as: 'sustancias' },
            { model: Presentacion, as: 'presentaciones' },
            { model: Laboratorio, as: 'laboratorios' }
        ]
        });
        res.status(200).json({
        ok: true,
        medicamentos
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
    getMedicamentos,
    getMedicamentoById,
    getMedicamentosByName
};
