const express = require('express');
const router = express.Router();
const filesystem =require ('fs');

router.get('/Pedir', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Perritos</h1>"); 
    response.write('<a href="/ordenar/adoptar">Adoptar al perrito</a>');
    response.write('<br>')
    response.write('<a href="/nosotros">Conce más de nosotros</a>')
    response.end();
});
router.get('/adoptar', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Perritos</h1>");
    response.write('<form action="/adoptar" method="POST">');

    let radios = '<fieldset><legend>¿Cuál perrito te gustaría adoptar</legend>';
    radios += '<div><input type="radio" id="labrador" name="razas" value="labrador" checked>'
    radios += '<label for="labrador">Labrador</label></div>';
    radios += '<div><input type="radio" id="pug" name="razas" value="pug">';
    radios += '<label for="pug">Pug</label></div>';
    radios += '<div><input type="radio" id="doberman" name="razas" value="doberman">';
    radios += '<label for="doberman">Doberman</label></div>';
    radios += '<div><input type="radio" id="chihuahua" name="razas" value="chihuahua">';
    radios += '<label for="chihuahua">Chihuahua</label></div></fieldset><br>';
    //
    response.write(radios);

    response.write('<a href="/ordenar/datos">Rellenar datos para adoptar </a>')
    
    response.write('<a href="/">Volver a la principal</a>')

    response.write("</form>");
    response.write('</body></html>');
    response.end();
});

router.get('/datos', (request, response, next) => {
    let html = `
        <form action="/ordenar/datos" method="POST">
        <label for="nombre">Escribe tu nombre:</label>
        <input type="text" id="nombre" name="nombre">
        <br>
        <br>
        <label for="dir">Escribe tu dirección:</label>
        <input type="text" id="dir" name="dir">
        <br>
        <br>
        <label for="cel">Escribe tu teléfono:</label>
        <input type="text" id="cel" name="cel">
        <br>
        <br>
        <br>
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.post('/datos', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    let nombre=request.body.nombre;
    let dir=request.body.dir;
    let cel=request.body.cel;
    let orden=`Nombre: ${nombre} \nDirección: ${dir}  \nCelular ${cel}`
    filesystem.writeFileSync('orden.txt',orden)
    response.send("Buenos días: " + request.body.nombre + " sus datos han sido guardados :)");
});



module.exports = router;