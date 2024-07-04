
const express = require('express');

const Medicamento = require('../../models/medicamento');
const Laboratorio = require('../../models/laboratorios');
const Sustancia = require('../../models/sustancias');

const getMedicamentos = async(req, res = express.response) => {
    try {
        const medicamentos = await Medicamento.findAll();
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

const getLaboratorios = async (req, res = express.response) => {
    try {
        const laboratorios = await Laboratorio.findAll();
            res.status(200).json({
            ok: true,
            laboratorios
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
            });
        }
}

const getSustancias = async(req, res = express.response) => {
    try {
        const sustancias = await Sustancia.findAll();
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
    getMedicamentos,
    getLaboratorios,
    getSustancias
}

