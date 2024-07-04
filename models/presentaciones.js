const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Presentaciones = sequelize.define('Presentaciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(75),
        allowNull: false
    }
    }, {
        tableName: 'Presentaciones',
        timestamps: false
    });

module.exports = Presentaciones;
