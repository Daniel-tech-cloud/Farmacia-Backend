const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/:id', (req, res) => {
  const laboratorioId = req.params.id;

  if (!laboratorioId) {
    return res.status(400).send('El parámetro "id" es requerido');
  }

  db.query('SELECT * FROM Laboratorios WHERE id = ?', [laboratorioId], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Laboratorio no encontrado');
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;
