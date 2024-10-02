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
// Búsqueda de productos por nombre (SELECT)
router.get('/search', (req, res) => {
  const nombre = req.query.nombre;
  const sql = "SELECT * FROM producto WHERE producto_nombre LIKE ?";
  pool.query(sql, [`%${nombre}%`], (err, results) => {
    if (err) throw err;
    res.render('productos', { results });
  });
})

// Obtener el conteo total de productos
router.get('/count', (req, res) => {
  const sql = "SELECT COUNT(*) AS total FROM producto";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ total: results[0].total });
  });
});

// Obtener productos con precio superior a un valor específico
router.get('/mayor/:precio', (req, res) => {
  const sql = "SELECT * FROM producto WHERE producto_precio > ?";
  pool.query(sql, [req.params.precio], (err, results) => {
    if (err) throw err;
    res.render('productos', { results });
  });
});

// Obtener productos agrupados por rango de precio
router.get('/rango-precio', (req, res) => {
  const sql = `
  SELECT CASE 
  WHEN producto_precio < 1000 THEN 'Bajo'
  WHEN producto_precio BETWEEN 1000 AND 5000 THEN 'Medio'
  ELSE 'Alto'
  END AS rango_precio,
  COUNT(*) total
  FROM producto
  GROUP BY rango_precio`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.render('productos_agrupados', { results });
  });
});

// Obtener productos junto con categorías (JOIN)
router.get('/productos-categorias', (req, res) => {
  const sql = `
    SELECT 
      p.id, 
      p.producto_nombre, 
      p.producto_precio, 
      c.categoria_nombre 
    FROM producto p
    JOIN categoria c ON p.categoria_id = c.id
  `;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.render('productos_categorias', { results });
  });
});

// Obtener productos más caros (ORDER BY)
router.get('/mas-caros', (req, res) => {
  const sql = "SELECT * FROM producto ORDER BY producto_precio DESC LIMIT 5";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.render('productos_mas_caros', { results });
  });
});





module.exports = router;
