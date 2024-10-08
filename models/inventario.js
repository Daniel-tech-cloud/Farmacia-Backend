const { DataTypes } = require('sequelize');
const Laboratorio = require('../models/laboratorios');
const sequelize = require('../database/config'); // Ajusta la ruta según la ubicación real

const Inventario = sequelize.define('Inventario', {
    idInventario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idMedicamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nombreMedicamento: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    idLaboratorio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioCompra: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioVenta: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    fechaCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    caducidad: {
        type: DataTypes.DATE,
        allowNull: false
    }
    }, {
    tableName: 'Inventario',
    timestamps: false
});

Inventario.belongsTo(Laboratorio, { foreignKey: 'idLaboratorio' });

module.exports = Inventario;