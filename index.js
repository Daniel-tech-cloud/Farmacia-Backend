// En tu servidor Node.js (index.js por ejemplo)

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Habilita CORS solo para la ruta '/api/data'
app.use('/api/data', cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: ''
});

connection.connect();

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM Presentaciones', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});

