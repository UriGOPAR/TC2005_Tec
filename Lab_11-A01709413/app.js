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

const OrdenarRutas= require('./routes/ordenar.routes');
app.use('/ordenar',OrdenarRutas);

const ConceRutas=require('./routes/sobremi.routes');
app.use('/sobremi',ConceRutas);


const hockeyRutas = require('./routes/hockey.routes.js');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe. ERROR 404');
});

app.listen(3000);


/*const express = require('express');
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

const hockeyRutas = require('./routes/hockey.routes.js');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);
*/