const { response } = require('express');
const { Laboratorio, Op } = require('../../../models');


// Obtener todos los laboratorios
const getLaboratorios = async (req, res = response) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.status(200).json({ ok: true, laboratorios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: error.message });
    }
};

// Obtener un laboratorio por ID
const getLaboratorioById = async (req, res = response) => {
    try {
        const { id } = req.params;
        const laboratorios = await Laboratorio.findByPk(id);
        if (!laboratorios) {
            return res.status(404).json({ ok: false, error: 'Laboratorio no encontrado' });
        }
        res.status(200).json({ 
            ok: true,  
            laboratorios
        });    
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: error.message });
    }
};

// Buscar laboratorios por nombre
const getLaboratoriosByName = async (req, res = response) => {
    try {
        const { nombre } = req.query;
        if (!nombre) {
            return res.status(400).json({ ok: false, error: 'El nombre es requerido' });
        }
        const laboratorios = await Laboratorio.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        });
        res.json({ ok: true, laboratorios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: error.message });
    }
};

module.exports = {
    getLaboratorios,
    getLaboratorioById,
    getLaboratoriosByName
};
