exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/peliculas/1'); //Este código se ejecuta cuando la sesión se elimina.
    });
};