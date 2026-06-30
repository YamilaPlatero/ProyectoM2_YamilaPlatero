const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      error: 'El título es obligatorio'
    });
  }

  if (!content || content.trim() === '') {
    return res.status(400).json({
      error: 'El contenido es obligatorio'
    });
  }

  if (!author_id) {
    return res.status(400).json({
      error: 'Debe indicar un autor'
    });
  }

  next();
};

module.exports = validatePost;