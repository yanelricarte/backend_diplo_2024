const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
/* 
// Configuración de conexión a la base de datos
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto_node'
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

// Actualizar un producto (UPDATE)
router.get('/update/:id', (req, res) => {
  let sql = "SELECT * FROM producto WHERE id = ?";
  conn.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.render('edit_producto', {
      producto: result[0]  
    });
  });
});

router.post('/update/:id', (req, res) => {
  let data = {
    producto_nombre: req.body.producto_nombre,
    producto_precio: req.body.producto_precio
  };
  let sql = "UPDATE producto SET ? WHERE id = ?";
  conn.query(sql, [data, req.params.id], (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});

// Eliminar un producto (DELETE)
router.get('/delete/:id', (req, res) => {
  let sql = "DELETE FROM producto WHERE id = ?";
  conn.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});*/



/* Pool de conexiones  */


// Crear un pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto_node',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Obtener todos los productos (SELECT)
router.get('/', (req, res) => {
  let sql = "SELECT * FROM producto";
  pool.query(sql, (err, results) => {
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
  pool.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});

// Actualizar un producto (UPDATE)
router.get('/update/:id', (req, res) => {
  let sql = "SELECT * FROM producto WHERE id = ?";
  pool.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.render('edit_producto', {
      producto: result[0]  
    });
  });
});

router.post('/update/:id', (req, res) => {
  let data = {
    producto_nombre: req.body.producto_nombre,
    producto_precio: req.body.producto_precio
  };
  let sql = "UPDATE producto SET ? WHERE id = ?";
  pool.query(sql, [data, req.params.id], (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});

// Eliminar un producto (DELETE)
router.get('/delete/:id', (req, res) => {
  let sql = "DELETE FROM producto WHERE id = ?";
  pool.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.redirect('/productos');
  });
});





module.exports = router;
