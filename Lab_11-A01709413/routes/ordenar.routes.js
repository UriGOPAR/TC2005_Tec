const express = require('express');
const router = express.Router();
const filesystem =require ('fs');

router.get('/Pedir', (request, response, next) => {
    let html = `
    <html>
    <head><meta charset="utf-8"></head><body>
    <h1>Perritos</h1> 
    <a href="/ordenar/adoptar">Adoptar al perrito</a>
    <br>
    <a href="../sobremi/conoceme">Conce más de nosotros</a>   
`;
response.send(html);

});
router.get('/adoptar', (request, response, next) => {
    let html = `
    <html>
    <head><meta charset="utf-8"></head><body>
    <h1>Perritos</h1>
    <form action="/adoptar" method="POST">

    <fieldset><legend>¿Cuál perrito te gustaría adoptar</legend>
    <div><input type="radio" id="labrador" name="razas" value="labrador" checked>
    <label for="labrador">Labrador</label></div>
    <div><input type="radio" id="pug" name="razas" value="pug">
    <label for="pug">Pug</label></div>
    <div><input type="radio" id="doberman" name="razas" value="doberman">
    <label for="doberman">Doberman</label></div>
    <div><input type="radio" id="chihuahua" name="razas" value="chihuahua">
    <label for="chihuahua">Chihuahua</label></div></fieldset><br>


    <a href="/ordenar/datos">Rellenar datos para adoptar </a>
    <br>
    
    <a href="/ordenar/pedir">Volver a la principal</a>

    </form>
    </body></html>

`;
response.send(html);

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
        <a href="/ordenar/pedir">Volver a la principal</a>

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