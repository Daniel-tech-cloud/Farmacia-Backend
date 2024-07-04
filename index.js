const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { syncDatabase } = require('./database/config'); // Importa syncDatabase

//* Servidor express
const app = express();

//* Usar CORS
app.use(cors());

//* Directorio público
app.use(express.static('public'));

//* Lectura y parseo del body
app.use(express.json());

//* Rutas de eventos
app.use('/api/events/search', require('./routes/events/search'));

//* Ruta de usuario (Crear, login, generar nuevo token)
app.use('/api/auth', require('./routes/user/auth'));

const PORT = process.env.PORT || 3000;

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
