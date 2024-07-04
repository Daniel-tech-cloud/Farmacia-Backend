const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Laboratorios = sequelize.define('Laboratorios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
    }, {
    tableName: 'Laboratorios',
    timestamps: false
});

module.exports = Laboratorios;
