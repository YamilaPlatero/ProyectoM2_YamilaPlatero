// Importar dependencias
const express = require('express');

// Importar rutas
const authorsRouter = require('./src/routes/authors.js');
const postsRouter = require('./src/routes/posts.js');

// Importar middlewares
const validateAuthor = require('./src/validators/authorvalidator.js');
const validatePost = require('./src/validators/postvalidator.js');

//const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notfound.js');

// Crear instancia de Express
const app = express();

// Middlewares base
app.use(express.json());

// Rutas
app.use('/api/authors', authorsRouter);
app.use('/api/posts', postsRouter);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'Blog API',
    endpoints: {
      authors: '/api/authors',
      posts: '/api/posts'
    }
  });
});

// 404
app.use(notFound);

// Error handler (SIEMPRE al final)
app.use(validatePost);
app.use(validateAuthor);


module.exports = app;