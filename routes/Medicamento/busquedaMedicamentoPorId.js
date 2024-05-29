
const express = require('express');
const router = express.Router();
const db = require('../../database/config');

router.get('/', (req, res) => {
  const datoABuscar = req.query.dato;
  
  const consultaMedicamentoPoId = `SELECT 
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
                                    Medicamento.id = ${ datoABuscar };`;
  
  db.query(consultaMedicamentoPoId, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
      return;
    }
    
    res.json(results);
  });
});

module.exports = router;
