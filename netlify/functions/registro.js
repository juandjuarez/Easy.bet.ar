exports.handler = async function(event, context) {
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',  // Cachear la solicitud preflight por un día
        },
      };
    }
  
    // Aquí es donde procesarías los datos del formulario
    // Por ejemplo, podés recibir los datos del evento y hacer algo con ellos
    const datosFormulario = JSON.parse(event.body);
  
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Registro exitoso' }),
    };
  };
  