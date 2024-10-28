// netlify/functions/utils.js
export const commonLogic = (event) => {
    console.log("Solicitud recibida: ", event.httpMethod);

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

    // Verifica si el método es POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Método no permitido',
        };
    }

    return null; // Para indicar que no hubo errores
};
