exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    const data = JSON.parse(event.body);
  
    // Procesar los datos, por ejemplo, guardarlos o enviarlos a un servicio externo
    console.log('Datos recibidos:', data);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Datos guardados exitosamente' }),
    };
  };
  