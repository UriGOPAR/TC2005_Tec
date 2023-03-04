const express = require('express');

const router = express.Router();

router.get('/conoceme', (request, response, next) => {

    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>Sobre mí</h1>
        <footer>Uri Jared Gopar Morales_A01709413 <br> Correo: A01709413@tec.mx <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>
        <a href=".. /ordenar/pedir">Volver a la principal</a>
        <br>
        <a href="/sobremi/masinfo">Conoce de mis bandas favoritas</a>

    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("El jugador es: " + request.body.jugador);
});

module.exports = router;