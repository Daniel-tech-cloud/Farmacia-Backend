// controllers/events/new/sustancia.js
const sequelize = require('../../../database/config');
const Sustancia = require('../../../models/sustancias');

const createSustancia = async (req, res) => {
    const t = await sequelize.transaction(); // Inicia una nueva transacción

    try {
        const { nombre, descripcion } = req.body;

        if (!nombre) {
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        }

        // Crear el nuevo sustancia dentro de la transacción
        const nuevoSustancia = await Sustancia.create({ nombre, descripcion }, { transaction: t });

        await t.commit(); // Confirma la transacción
        res.status(201).json(nuevoSustancia);
    } catch (error) {
        await t.rollback(); // Revierte la transacción en caso de error

        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Error de validación', errors: error.errors });
        }
        console.error('Error al crear la sustancia:', error);
        res.status(500).json({ message: 'Error al crear la sustancia', error });
    }
};

module.exports = {
    createSustancia
};