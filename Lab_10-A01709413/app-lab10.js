const http= require('http');
const filesystem=require('fs');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Chilaquiles</h1>");
    response.write('<form action="/ordenar" method="POST">');

    let radios = '<fieldset><legend>¿Con qué salsa quieres tus chilaquiles?</legend>';
    radios += '<div><input type="radio" id="rojos" name="tipo_chilaquiles" value="rojos" checked>'
    radios += '<label for="rojos">Salsa roja</label></div>';
    radios += '<div><input type="radio" id="verdes" name="tipo_chilaquiles" value="verdes">';
    radios += '<label for="verdes">Salsa verde</label></div></fieldset><br>';

    response.write(radios);

    response.write('<label for="extras">¿Con qué deseas tus chilaquiles?</label>');
    response.write('<input type="text" id="extras" name="extras"><br><br>');

    response.write('<input type="submit" value="Ordenar">');

    response.write("</form>");
    response.write('</body></html>');
    response.end();
});

server.listen(3000);