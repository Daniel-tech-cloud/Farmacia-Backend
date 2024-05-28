const mysql = require('mysql2');
require('dotenv').config();  // Asegúrate de cargar dotenv antes de usar las variables de entorno

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB
});

db.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = db;
