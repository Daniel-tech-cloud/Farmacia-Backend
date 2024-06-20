// routes/your-route-file.js
const express = require('express');
const router = express.Router();
const db = require('../../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;

  // Verifica que datoABuscar no sea undefined
  if (!datoABuscar) {
    return res.status(400).send('El parámetro "dato" es requerido');
  }

  const consultaMedicamentoPorId = `SELECT 
                                      Medicamento.nombre AS nombreMedicamento,
                                      Medicamento.descripcion,
                                      Medicamento.indicaciones,
                                      Inventario.cantidad,
                                      Inventario.precioVenta,
                                      Inventario.caducidad,
                                      Laboratorios.nombre AS nombreLaboratorio
                                    FROM 
                                      Medicamento
                                    INNER JOIN 
                                      Inventario ON Medicamento.id = Inventario.idMedicamento
                                    INNER JOIN 
                                      Laboratorios ON Medicamento.idLaboratorio = Laboratorios.id
                                    WHERE 
                                      Medicamento.id = ?`;

  db.query(consultaMedicamentoPorId, [datoABuscar], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }

    res.json(results);
  });
});

module.exports = router;
