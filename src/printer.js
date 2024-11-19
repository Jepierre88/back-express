// printerService.ts
import axios from 'axios';

// URL base de tu backend
const BASE_URL = 'http://192.168.88.40:8080'; // Cambia esto según la dirección real de tu backend

// Interfaz para la estructura de los datos de impresión

// Función para obtener la lista de impresoras
export const getPrinters = async ()=> {
    try {
        const response = await axios.get(`${BASE_URL}/getprinters`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo impresoras:", error);
        throw error;
    }
};

// Función para enviar una solicitud de impresión
export const print = async (informacion) => {
    try {
        const response = await axios.post(`${BASE_URL}/imprimir`, informacion, {
          timeout: 5000
        });
        return response.data;
    } catch (error) {
        console.error("Error al imprimir:", error);
        throw error;
    }
};
