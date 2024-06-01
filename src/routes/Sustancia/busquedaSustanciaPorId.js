
const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  const consultaSustanciaPorId = `SELECT nombre, descripcion FROM Sustancias WHERE id = ${ datoABuscar };`;
  
  db.query(consultaSustanciaPorId, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
