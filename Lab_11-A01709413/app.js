const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

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
    response.send('Hola desde la ruta /hola');
});

app.get('/nuevo', (request, response, next) => {
    
    let html = `
        <form action="nuevo" method="POST">
        <label for="jugador">Nombre del jugador:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

app.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("El jugador es: " + request.body.jugador);
});

app.use((request, response, next) => {
    console.log("Tercer middleware");

    //Envía la respuesta al cliente
    response.send('Hola desde el tercer middleware');
});

app.listen(3000);