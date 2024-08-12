// models/medicamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Sustancia = require('./sustancias');
const Presentacion = require('./presentaciones');
const Laboratorio = require('./laboratorios');

const Medicamento = sequelize.define('Medicamento', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idSustancia: {
    type: DataTypes.INTEGER,
    references: {
      model: Sustancia,
      key: 'id'
    }
  },
  idPresentacion: {
    type: DataTypes.INTEGER,
    references: {
      model: Presentacion,
      key: 'id'
    }
  },
  idLaboratorio: {
    type: DataTypes.INTEGER,
    references: {
      model: Laboratorio,
      key: 'id'
    }
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  indicaciones: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagen: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  compuesto: { // Agrega este campo
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Medicamento' // Especifica el nombre exacto de la tabla
});

module.exports = Medicamento;
