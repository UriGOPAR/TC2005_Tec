const Pelicula = require('../models/peliculas.model');


exports.get_nueva = (request, response, next) => {
    response.render('nueva');
};

exports.post_nueva = (request, response, next) => {

    const pelicula = new Pelicula({
        titulo: request.body.titulo,
        productora: request.body.productora,
        descripcion: request.body.descripcion,
    });

    pelicula.save();

    request.session.ultima_pelicula = pelicula.titulo;

    response.redirect('/peliculas/1');
};

exports.listara = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('listam', { 
        productoras: Pelicula.fetchAll(),
        ultima_pelicula: request.session.ultima_pelicula || '', 
    });
};