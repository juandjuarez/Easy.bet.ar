// Función Netlify para manejar el formulario
exports.handler = async function(event, context) {
  
  console.log("Solicitud recibida: ", event.httpMethod);  // Registrar el método de la solicitud

  // Manejo de la solicitud preflight para CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://easy.bet.ar',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',  // Cachea la solicitud preflight por un día
      },
    };
  }

  // Verifica si el método es POST, si no, devuelve error 405
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Método no permitido',
    };
  }

  // Procesar los datos enviados desde el formulario
  const datosFormulario = JSON.parse(event.body);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
    },
    body: JSON.stringify({
      message: 'Registro exitoso',
      data: datosFormulario,
    }),
  };
};
