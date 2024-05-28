const express = require('express');
const router = express.Router();
const db = require('../../database/config');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Laboratorios', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
