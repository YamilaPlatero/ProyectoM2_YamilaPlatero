const postService = require("../services/postservice");

// Obtener todos los posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts(req.query.published);
    res.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts:", error);
    res.status(500).json({ error: "Error obteniendo posts" });
  }
};

// Obtener un post por ID
const getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json(post);
  } catch (error) {
    console.error("Error obteniendo post:", error);
    res.status(500).json({ error: "Error obteniendo post" });
  }
};

// Obtener posts de un autor
const getPostsByAuthorId = async (req, res) => {
  try {
    const posts = await postService.getPostsByAuthorId(req.params.authorId);
    res.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts del autor:", error);
    res.status(500).json({ error: "Error obteniendo posts del autor" });
  }
};

// Crear post
const createPost = async (req, res) => {
  const { title, content, author_id } = req.body;

  if (!title || !content || !author_id) {
    return res.status(400).json({
      error: "Título, contenido y author_id son requeridos",
    });
  }

  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creando post:", error);

    if (error.code === "23503") {
      return res
        .status(404)
        .json({ error: "El autor especificado no existe" });
    }

    res.status(500).json({ error: "Error creando post" });
  }
};

// Actualizar post
const updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(
      req.params.id,
      req.body
    );

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json(post);
  } catch (error) {
    console.error("Error actualizando post:", error);
    res.status(500).json({ error: "Error actualizando post" });
  }
};

// Eliminar post
const deletePost = async (req, res) => {
  try {
    const deleted = await postService.deletePost(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json({ message: "Post eliminado exitosamente" });
  } catch (error) {
    console.error("Error eliminando post:", error);
    res.status(500).json({ error: "Error eliminando post" });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthorId,
  createPost,
  updatePost,
  deletePost,
};