import axios from 'axios';

export const bodoniAPI = axios.create({
    baseURL: 'http://localhost:3000/api/', // Cambia esta URL por tu API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});