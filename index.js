const express = require('express');
require('dotenv').config();
const cors = require('cors');

//* Servidor express
const app = express();

//* Usar CORS
app.use(cors());

//* Directorio público
app.use(express.static('public'));

//* Lectura y parseo del body
app.use(express.json());

//* Rutas de eventos
//? Search
app.use('/api/events/search/medicamentos', require('./routes/events/search/medicamentos'));
app.use('/api/events/search/laboratorios', require('./routes/events/search/laboratorios'));
app.use('/api/events/search/sustancias', require('./routes/events/search/sustancias'));
app.use('/api/events/search/presentaciones', require('./routes/events/search/presentaciones'));

//? New
app.use('/api/events/new/medicamento', require('./routes/events/new/medicamento'));
app.use('/api/events/new/laboratorio', require('./routes/events/new/laboratorio'));
app.use('/api/events/new/sustancia', require('./routes/events/new/sustancia'));

//? Update
app.use('/api/events/update/medicamento', require('./routes/events/update/medicamento'));
app.use('/api/events/update/laboratorio', require('./routes/events/update/laboratorio'));
app.use('/api/events/update/sustancia', require('./routes/events/update/sustancia'));

//? Delete 
app.use('/api/events/delete/medicamento', require('./routes/events/delete/medicamento'));
app.use('/api/events/delete/laboratorio', require('./routes/events/delete/laboratorio'));
app.use('/api/events/delete/sustancia', require('./routes/events/delete/sustancia'));

//? Inventario
app.use('/api/events/inventory', require('./routes/events/inventory/inventario'));


//* Ruta de usuario (Crear, login, generar nuevo token)
app.use('/api/auth', require('./routes/user/auth'));

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();
