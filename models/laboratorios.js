// models/laboratorio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Laboratorio = sequelize.define('Laboratorio', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
    });

module.exports = Laboratorio;
