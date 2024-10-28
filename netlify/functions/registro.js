// netlify/functions/registro.js
import { commonLogic } from './utils';

exports.handler = async function(event, context) {
    // Lógica común para manejar CORS y método HTTP
    const commonResponse = commonLogic(event);
    if (commonResponse) {
        return commonResponse; // Si hay un error en la lógica común, devuelve la respuesta
    }

    try {
        const datosFormulario = JSON.parse(event.body);
        console.log("Datos recibidos: ", datosFormulario); // Log de los datos recibidos

        // Aquí puedes agregar la lógica para guardar los datos en la base de datos

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
            },
            body: JSON.stringify({
                message: 'Registro exitoso',
                data: datosFormulario, // Devuelve los datos recibidos
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
