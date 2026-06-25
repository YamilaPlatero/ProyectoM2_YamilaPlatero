//const { loadEnvFile } = require('node:process');
//loadEnvFile('.env');
require('dotenv').config();

const express = require('express');

const router = express.Router();

const pool = require('../db/config.js');

const validatePost = require('../middlewares/postvalidator.js');
const PostsController = require('../CCcontrollers/postcontroller.js');

// GET /api/posts - Obtener todos los posts
router.get('/', PostsController.getAllPosts);
// GET /api/posts/:id - Obtener un post por ID
router.get('/:id', PostsController.getPostById);

// GET /api/posts/author/:authorId - Obtener posts por autor
router.get('/author/:authorId', PostsController.getPostsByAuthorId);

// POST /api/posts - Crear un nuevo post
router.post('/', PostsController.createPost);

// PUT /api/posts/:id - Actualizar un post
router.put('/:id', PostsController.updatePost);

// DELETE /api/posts/:id - Eliminar un post
router.delete('/:id', PostsController.deletePost);


module.exports = router;