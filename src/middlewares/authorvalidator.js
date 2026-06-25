const validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).json({
      error: 'El nombre es obligatorio'
    });
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({
      error: 'Email inválido'
    });
  }

  next();
};

module.exports = validateAuthor;