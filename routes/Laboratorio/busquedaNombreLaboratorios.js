const express = require('express');
const router = express.Router();
const db = require('../../database/config');

router.get('/', (req, res) => {
  const nombreLaboratorioABuscar = req.query.dato;
  
  const consultaLaboratorios = `SELECT * FROM Laboratorios WHERE nombre LIKE '%${ nombreLaboratorioABuscar }%'`;
  
  db.query(consultaLaboratorios, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
