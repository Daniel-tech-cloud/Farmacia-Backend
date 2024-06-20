const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;

  // Verifica que datoABuscar no sea undefined
  if (!datoABuscar) {
    return res.status(400).send('El parámetro "dato" es requerido');
  }

  const consultaLaboratorioPorId = `SELECT nombre, descripcion FROM Laboratorios WHERE id = ?`;

  db.query(consultaLaboratorioPorId, [datoABuscar], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }

    res.json(results);
  });
});

module.exports = router;
