require ('dotenv').config();
// Crear instancia de Express
const app = require('../NuevoPI2/app.js');
// Configurar puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;