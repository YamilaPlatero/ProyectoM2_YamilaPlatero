
//require('dotenv').config();

const express = require('express');

const router = express.Router();

const pool = require('../db/config.js');

const validateAuthor = require('../middlewares/authorvalidator.js');
const authorsController = require('../controllers/authorcontroller.js');



// GET /api/authors - Obtener todos los autores
router.get('/', authorsController.getAllAuthors);

// GET /api/authors/:id - Obtener un autor por ID
router.get('/:id', authorsController.getAuthorById);

// POST /api/authors - Crear un nuevo autor
router.post('/', validateAuthor, authorsController.createAuthor);
// PUT /api/authors/:id - Actualizar un autor
router.put('/:id', authorsController.updateAuthor);

// DELETE /api/authors/:id - Eliminar un autor
router.delete('/:id', authorsController.deleteAuthor);




module.exports = router;