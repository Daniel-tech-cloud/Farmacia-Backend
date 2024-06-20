const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const nombreLaboratorioABuscar = req.query.dato;

   // Verifica que nombreLaboratorioABuscar no sea undefined
  if (!nombreLaboratorioABuscar) {
    return res.status(400).send('El parámetro "dato" es requerido');
  }

  const consultaLaboratorios = `SELECT * FROM Laboratorios WHERE nombre LIKE ?`;
  
  db.query(consultaLaboratorios, [`%${nombreLaboratorioABuscar}%`], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
