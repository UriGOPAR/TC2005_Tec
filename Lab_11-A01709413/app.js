const { request, response } = require('express');
const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();

});
app.use('/hola', (request, response, next) => {
    response.send("Hola desde la ruta '/hola");
});

app.use( (request, response, next) => {
    console.log("Tercer middleware");

    //Envía la respuesta al cliente
    response.send("Hola desde el tercer middleware");
});
app.listen(3000);