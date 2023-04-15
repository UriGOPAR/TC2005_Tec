const Pelicula = require('../models/peliculas.model');
const Productora= require('../models/productoras.model');

exports.get_editar = (request, response, next) => {
    Pelicula.fetchOne(request.params.id)
    .then(([peliculas_consulta, fieldData]) => {
        if (peliculas_consulta.length == 1) {
            const pelicula = new Pelicula({
                id: peliculas_consulta[0].id,
                titulo: peliculas_consulta[0].titulo,
                productora: peliculas_consulta[0].idProductora,
                imagen: peliculas_consulta[0].imagen,
                descripcion: peliculas_consulta[0].descripcion
            });
            Productora.fetchAll()
            .then(([rows, fieldData]) => {
                response.render('nueva', {
                    productoras: rows,
                    isLoggedIn: request.session.isLoggedIn || false,
                    nombre: request.session.nombre || '',
                    pelicula: pelicula || false,
                });
            }).catch(error => console.log(error));
        } else {
            return response.redirect('/peliculas/nueva');
        }
    })
    .catch(error => console.log(error));
};

exports.post_editar = (request, response, next) => {
    console.log("Datos para editar");
    console.log(request.body);
};


exports.get_nueva = (request, response, next) => {

    Productora.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('nueva', {
            productoras: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            pelicula:false,
        });
    }).catch(error => console.log(error));
};

exports.post_nueva = (request, response, next) => {

    console.log(request.file);

    const pelicula = new Pelicula({
        titulo: request.body.titulo,
        productora: request.body.productora,
        descripcion: request.body.descripcion,
    });

    pelicula.save()
    .then(([rows, fieldData]) => {

        request.session.mensaje="La película se agrego exitosamente";
        request.session.ultima_pelicula = pelicula.titulo;
        response.redirect('/peliculas/1');

    })
    .catch((error) => {console.log(error)});
};

exports.listara = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje='';

    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje=''; 
    }
    Pelicula.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);

        response.render('listam', {
            productoras:rows,
            ultima_pelicula:request.session.ultima_pelicula || '',
            mensaje: mensaje,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {
        console.log(err);
    });

};