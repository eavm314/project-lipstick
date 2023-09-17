import axios from 'axios';

export const bodoniAPI = axios.create({
    baseURL: '/api', // Cambia esta URL por tu API
    timeout: 20000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});