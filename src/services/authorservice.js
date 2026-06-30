const pool = require("../db/config");

// Obtener todos los autores
const getAllAuthors = async () => {
  const result = await pool.query(
    "SELECT * FROM authors ORDER BY id ASC"
  );

  return result.rows;
};

// Obtener un autor por ID
const getAuthorById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM authors WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

// Crear autor
const createAuthor = async ({ name, email, bio }) => {
  const result = await pool.query(
    "INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *",
    [name, email, bio || null]
  );

  return result.rows[0];
};

// Actualizar autor
const updateAuthor = async (id, { name, email, bio }) => {
  const result = await pool.query(
    `UPDATE authors
     SET name = COALESCE($1, name),
         email = COALESCE($2, email),
         bio = COALESCE($3, bio)
     WHERE id = $4
     RETURNING *`,
    [name, email, bio, id]
  );

  return result.rows[0];
};

// Eliminar autor
const deleteAuthor = async (id) => {
  const result = await pool.query(
    "DELETE FROM authors WHERE id = $1",
    [id]
  );

  return result.rowCount;
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
