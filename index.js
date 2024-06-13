const express = require('express');
const app = express();
const db = require('./database/config'); // Asegúrate de configurar la conexión a la base de datos
const cors = require('cors');  // Importar el paquete cors

// Importar el router principal
const routes = require('./src/routes');

// Usar CORS
app.use(cors());

// Usar el router principal
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});