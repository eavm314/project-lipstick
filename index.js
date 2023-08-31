const express = require('express');
const routes = require('./src/app/routes/api');

//Creando el servidor
const app = express();

//Leer contenido json dentro del lobby
app.use(express.json());

//Creando la API
app.use('api',routes)

const PORT = 3000;//TODO Crear enviroments

app.listen(PORT,()=>{
    console.log("El servidor se ha levantado correctamente en el puerto", PORT);
});