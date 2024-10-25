// Función Netlify para manejar el formulario
exports.handler = async function(event, context) {
  
  console.log("Solicitud recibida: ", event.httpMethod);  // Registrar el método de la solicitud

  // Manejo de la solicitud preflight para CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',  
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

  try {
    // Procesar los datos enviados desde el formulario
    const datosFormulario = JSON.parse(event.body);
    
    console.log("Datos recibidos: ", datosFormulario); // Agrega un log para ver los datos

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
  } catch (error) {
    console.error("Error al procesar la solicitud:", error); // Log para errores
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error interno del servidor' }),
    };
  }
};
