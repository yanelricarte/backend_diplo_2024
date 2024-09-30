const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de conexión a la base de datos
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_sql'
});

// Conectar a MySQL
conn.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// Obtener todos los productos (SELECT)
router.get('/', (req, res) => {
  let sql = "SELECT * FROM producto";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('productos', { results: results });
  });
});

// Insertar un nuevo producto (CREATE)
router.post('/save', (req, res) => {
  let data = {
    producto_nombre: req.body.producto_nombre,
    producto_precio: req.body.producto_precio
  };
  let sql = "INSERT INTO producto SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});




module.exports = router;
