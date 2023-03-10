const http= require('http');
const filesystem=require('fs');
const server =http.createServer((request,response) => {
    console.log(request.url);
    if(request.url == "/" ){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Perritos</h1>"); 
        response.write('<a href="/adoptar">Adoptar al perrito</a>');
        response.write('<br>')
        response.write('<a href="/nosotros">Conce más de nosotros</a>')
        response.end();

    }   else if (request.url === "/adoptar" && request.method === "GET") {
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

        response.write('<label for="extras">Nombre: </label>');
        response.write('<input type="text" id="info" name="info"><br><br>');
        response.write('<label for="extras">Escribe tu domicilio: </label>');
        response.write('<input type="text" id="info" name="info"><br><br>');
        response.write('<label for="extras">Número de télefono: </label>');
        response.write('<input type="text" id="info" name="info"><br><br>');

        response.write('<input type="submit" value="Adoptar">');
        response.write('<a href="/">Volver a la principal</a>')

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    }else if (request.url === "/adoptar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const razas = datos_completos.split('&')[0].split('=')[1];
            console.log(razas);
            if(razas === "labrador") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por tu adoptar :)");
                response.write('<img alt="Labrador" src="https://i.pinimg.com/originals/99/f9/ed/99f9ede31328c8484e9e252d08811535.jpg">');
                return response.end();

            } else if (razas == "pug"){
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por adoptar :)");
                response.write('<img alt="Pug" src="https://animalia-life.com/data_images/pug/pug6.jpg">');
                return response.end();

            } else if (razas == "doberman"){
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por adoptar :)");
                response.write('<img alt="Doberman" src="https://notasdemascotas.com/wp-content/uploads/2017/02/Doberman-cachorro.jpg">');
                return response.end();
            }else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por adoptar :)");
                response.write('<img alt="Chihuahua" src="https://i.ytimg.com/vi/124ouDf3Dg0/maxresdefault.jpg">');
                return response.end();
                
            }
            
        });
    }else if(request.url === "/nosotros" ){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Sobre mí</h1>");
        response.write("<footer>Uri Jared Gopar Morales_A01709413 <br> Correo: A01709413@tec.mx <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>")
        response.write('<a href="/">Volver a la principal</a>')
        response.end();
    } else {
        response.statusCode = 404;
        response.write("Lo sentimos, esa página no se encuentra");
        response.end();
    }

});
server.listen(3000);
/*const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Chilaquiles</h1>");
        response.write('<a href="/ordenar">Ordena tus chilaquiles aquí</a>');
        response.end();
    } else if (request.url === "/ordenar" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
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
    } else if (request.url === "/ordenar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const tipo_chilaquiles = datos_completos.split('&')[0].split('=')[1];
            console.log(tipo_chilaquiles);
            if(tipo_chilaquiles === "rojos") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por tu orden");
                response.write('<img alt="chilaquiles rojos" src="https://sazondemama.com/wp-content/uploads/2022/09/Como-hacer-la-receta-de-chilaquiles-rojos-y-cuantas-calorias-tiene-768x432.jpg">');
                return response.end();
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gracias por tu orden");
                response.write('<img alt="chilaquiles verdes" src="https://i.pinimg.com/736x/9a/c3/2b/9ac32b9b26902dc6708d835d6b8d0954.jpg">');
                return response.end();
            }
            
        });

        
    } else {
        response.statusCode = 404;
        response.write("Lo sentimos, de esos chilaquiles no tenemos");
        response.end();
    }

    
    
});

server.listen(3000);*/
