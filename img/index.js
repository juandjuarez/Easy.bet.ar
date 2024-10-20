const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para verificar que el servidor está corriendo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejo de error 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page not found</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}/`);
});
