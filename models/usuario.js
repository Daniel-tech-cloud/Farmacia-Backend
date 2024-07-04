const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    apPaterno: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    apMaterno: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
    pass: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
    }, {
    tableName: 'Usuario',
    timestamps: false
});

module.exports = Usuario;
