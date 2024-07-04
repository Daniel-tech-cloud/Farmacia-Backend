const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Roles = sequelize.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreRol: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
    }, {
    tableName: 'Roles',
    timestamps: false
});

module.exports = Roles;
