const express = require('express');
const router = express.Router();
const db = require('../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  const consultaPorNombreLaboratorio = `SELECT * FROM Medicamento WHERE nombre LIKE '%${datoABuscar}%'`;
  
  db.query(consultaPorNombreLaboratorio, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;

