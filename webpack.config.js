const path = require('path');

module.exports = {
  entry: '/src/index.js', // Asegúrate de que esta ruta sea correcta
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // Cambia a 'development' si es necesario
};
