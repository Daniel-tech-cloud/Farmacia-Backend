// models/index.js (para importar todos los modelos y Sequelize)
const Sequelize = require('sequelize');
const sequelize = require('../database/config');

const Medicamento = require('./medicamento');
const Sustancia = require('./sustancias');
const Presentacion = require('./presentaciones');
const Laboratorio = require('./laboratorios');

const Op = Sequelize.Op;

// Definir asociaciones
Medicamento.belongsTo(Sustancia, { foreignKey: 'idSustancia', as: 'sustancias' });
Medicamento.belongsTo(Presentacion, { foreignKey: 'idPresentacion', as: 'presentaciones' });
Medicamento.belongsTo(Laboratorio, { foreignKey: 'idLaboratorio', as: 'laboratorios' });

module.exports = {
    Medicamento,
    Sustancia,
    Presentacion,
    Laboratorio,
    Op,
    sequelize
};