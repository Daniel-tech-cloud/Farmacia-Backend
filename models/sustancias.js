// models/sustancia.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Sustancia = sequelize.define('Sustancia', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
}, {
    tableName: 'sustancias', // Especifica el nombre real de la tabla en tu base de datos
});

module.exports = Sustancia;
