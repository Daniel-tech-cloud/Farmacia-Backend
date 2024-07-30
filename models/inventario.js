const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Ajusta la ruta según la ubicación real

const Inventario = sequelize.define('Inventario', {
    idMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true
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

module.exports = Inventario; // Exporta el modelo
