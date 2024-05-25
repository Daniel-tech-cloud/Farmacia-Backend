const express = require('express');
const cors = require('cors');
const laboratorios = require('./routes/laboratorios');
const medicamentoRoute = require('./routes/busquedaNombreMedicamento');
const laboratorioRoute = require('./routes/busquedaLaboratorio');
const sustanciaRoute = require('./routes/busquedaSustanciaActiva');
const medicamentoId = require('./routes/busquedaMedicamentoPorId');

const app = express();
const port = 3001;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Ver Laboratorios
app.use('/api/laboratorios', laboratorios);

// Rutas relacionadas con las búsquedas
// Nombre de medicamento
app.use('/api/busqueda/medicamento', medicamentoRoute);
app.use('/api/busqueda/medicina', medicamentoId);
app.use('/api/busqueda/laboratorio', laboratorioRoute);
app.use('/api/busqueda/sustancia', sustanciaRoute);



app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});
