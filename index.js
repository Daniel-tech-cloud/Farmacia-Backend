const express = require('express');
const cors = require('cors');
const laboratoriosRoutes = require('./routes/laboratorios');

const app = express();
const port = 3001;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Monta las rutas relacionadas con los laboratorios
app.use('/api/laboratorios', laboratoriosRoutes);

app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});
