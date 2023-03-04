const express = require('express');

const router = express.Router();

router.get('/conoceme', (request, response, next) => {

    let html = `
        <html>
        <head><meta charset="utf-8"></head><body>
        <h1>Sobre mí</h1>
        <footer>Uri Jared Gopar Morales_A01709413 <br> Correo: A01709413@tec.mx <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>
        <a href="../ordenar/pedir">Volver a la principal</a>
        <br>
        <a href="/sobremi/bandas">Conoce de mis bandas favoritas</a>

    `;
    response.send(html);
});

router.get('/bandas', (request, response, next) => {

    let html = `
    <strong>MIS BANDAS FAVORITAS</strong><br>
    <table>
        <thead>
        <th scope="col">Banda</th>
        <th scope="col">Canción Favorita</th>
        <th scope="col">Album</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Greenday</th>
            <td>Boulevard Of Broken Dreams</td>
            <td>American Idiot</td>
        </tr>
        <tr>
            <th scope="row">Cage The Elephant</th>
            <td>Ready To Let Go</td>
            <td>Social Cues</td>
        </tr>
        <tr>
            <th scope="row">The Strokes</th>
            <td>The Adults Are Talking</td>
            <td>The New Abnormal</td>
        </tr>
        <tr>
            <th scope="row">Artic Monkeys</th>
            <td>Fluorescent Adolescent</td>
            <td>Worst Nightmare</td>
        </tr>
        <tr>
            <th scope="row">Gorillaz</th>
            <td>On Melancholy Hill</td>
            <td>Plastic Beach</td>
        </tr>
        <tr>
            <th scope="row">Muse</th>
            <td>Knights of Cydonia</td>
            <td>Black holes and Revelation</td>
        </tr>
    </tbody>
    </table>
    <br>
    <a href="/sobremi/conoceme">Atrás</a>
<br>
`;
response.send(html);
    
});

module.exports = router;