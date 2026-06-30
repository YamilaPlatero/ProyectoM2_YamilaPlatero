const authorService = require("../services/authorservice");

// Obtener todos
const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    console.error("Error obteniendo autores:", error);
    res.status(500).json({ error: "Error obteniendo autores" });
  }
};

// Obtener por ID
const getAuthorById = async (req, res) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);

    if (!author) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }

    res.json(author);
  } catch (error) {
    console.error("Error obteniendo autor:", error);
    res.status(500).json({ error: "Error obteniendo autor" });
  }
};

// Crear
const createAuthor = async (req, res) => {
  try {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    console.error("Error creando autor:", error);

    if (error.code === "23505") {
      return res.status(409).json({ error: "El email ya está registrado" });
    }

    res.status(500).json({ error: "Error creando autor" });
  }
};

// Actualizar
const updateAuthor = async (req, res) => {
  try {
    const author = await authorService.updateAuthor(
      req.params.id,
      req.body
    );

    if (!author) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }

    res.json(author);
  } catch (error) {
    console.error("Error actualizando autor:", error);

    if (error.code === "23505") {
      return res.status(409).json({ error: "El email ya está registrado" });
    }

    res.status(500).json({ error: "Error actualizando autor" });
  }
};

// Eliminar
const deleteAuthor = async (req, res) => {
  try {
    const deleted = await authorService.deleteAuthor(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }

    res.json({ message: "Autor eliminado exitosamente" });
  } catch (error) {
    console.error("Error eliminando autor:", error);
    res.status(500).json({ error: "Error eliminando autor" });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};