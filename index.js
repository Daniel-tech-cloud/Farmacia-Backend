const express = require('express');
const cors = require('cors');
const laboratorios = require('./routes/Laboratorio/laboratorios');
const medicamentoRoute = require('./routes/Medicamento/busquedaNombreMedicamentos');
const laboratorioRoute = require('./routes/Laboratorio/busquedaNombreLaboratorios');
const sustanciaRoute = require('./routes/Sustancia/busquedaSustanciaActiva');
const medicamentoId = require('./routes/Medicamento/busquedaMedicamentoPorId');
const laboratorioId = require('./routes/Laboratorio/busquedaLaboratorioPorId');
const sustanciaId = require('./routes/Sustancia/busquedaSustanciaPorId');

const app = express();

// Habilita CORS para todas las solicitudes
app.use(cors());

// Ver Laboratorios
app.use('/api/laboratorios', laboratorios);

// Rutas relacionadas con las búsquedas
// Nombre de medicamento
app.use('/api/busqueda/medicamento', medicamentoRoute);
app.use('/api/busqueda/medicina', medicamentoId);
app.use('/api/busqueda/laboratorio', laboratorioRoute);
app.use('/api/busqueda/lab', laboratorioId);
app.use('/api/busqueda/sus', sustanciaId);
app.use('/api/busqueda/sustancia', sustanciaRoute);



app.listen(process.env.PORt, () => {
  console.log(`Servidor API escuchando en http://localhost:${process.env.PORt}`);
});
