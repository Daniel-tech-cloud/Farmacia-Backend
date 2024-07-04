const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Medicamento = sequelize.define('Medicamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    idSustancia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idPresentacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idLaboratorio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    indicaciones: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    imagen: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    }
    }, {
    tableName: 'Medicamento',
    timestamps: false
});

module.exports = Medicamento;
