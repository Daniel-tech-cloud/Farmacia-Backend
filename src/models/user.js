const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING(100), // Ajusta el tamaño si es necesario
    allowNull: false
  }
}, {
  tableName: 'Usuario',
  timestamps: false
});

module.exports = Usuario;