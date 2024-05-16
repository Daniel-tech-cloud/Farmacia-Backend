const express = require('express');
const router = express.Router();
const db = require('../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  const query = `SELECT * FROM Laboratorios WHERE nombre LIKE '%${ datoABuscar }%'`;
  
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
