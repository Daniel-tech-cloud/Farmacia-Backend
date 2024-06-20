const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  if (!datoABuscar) {
    return res.status(400).send('El parámetro "dato" es requerido');
  }
  const consultaPorNombreLaboratorio = `SELECT * FROM Medicamento WHERE nombre LIKE ?`;
  
  db.query(consultaPorNombreLaboratorio, [`%${datoABuscar}%`],(error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;

