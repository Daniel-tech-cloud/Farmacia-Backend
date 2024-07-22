const { DataTypes } = require('sequelize');
const sequelize = require('../database/config'); // Verifica la ruta y configuración

const Presentacion = sequelize.define('Presentacion', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'presentaciones'
});

module.exports = Presentacion;
