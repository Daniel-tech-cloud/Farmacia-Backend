const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  // Validando el parámetro a buscar
  if (!datoABuscar) {
    return res.status(400).send('El parámetro "dato" es requerido');
  }
  
  const query = `SELECT * FROM Sustancias WHERE nombre LIKE ?`;
  
  db.query(query, [`%${datoABuscar}%`], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
