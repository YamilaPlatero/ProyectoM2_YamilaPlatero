
//const { loadEnvFile } = require('node:process');
//loadEnvFile('.env');
// Importar dependencias
const express = require('express');

// Importar rutas
const authorsRouter = require('./src/routes/authors');
const postsRouter = require('./src/routes/posts');
// Importar middlewares
const validateAuthor = require('./src/middlewares/authorvalidator');
const validatePost = require('./src/middlewares/postvalidator');

//const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notfound');
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

//

// 404
app.use(notFound);

// Error handler (SIEMPRE al final)
app.use(validatePost);
app.use(validateAuthor);


module.exports = app;