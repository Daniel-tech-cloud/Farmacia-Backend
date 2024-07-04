const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Sustancias = sequelize.define('Sustancias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
    }, {
    tableName: 'Sustancias',
    timestamps: false
});

module.exports = Sustancias;
