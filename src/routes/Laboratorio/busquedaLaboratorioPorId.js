
const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  const consultaLaboratorioPorId = `SELECT nombre, descripcion FROM Laboratorios WHERE id = ${ datoABuscar };`;
  
  db.query(consultaLaboratorioPorId, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
