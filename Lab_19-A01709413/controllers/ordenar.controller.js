const filesystem =require ('fs');

const Registro=require('../models/ordenar.model');

exports.getRegistro = (request,response,next)=>{
    response.render('registro.ejs');


};

exports.postRegistro =(request,response,next)=>{
        const registro = new Registro({
        raza: request.body.raza,
    });

    registro.save();

    response.redirect('/ordenar/adoptar');

};
exports.postRegistro= (request, response, next) => {
     response.render('adoptar',Registro.fetchAll());
};


exports.getPedir =(request, response, next) => {
    response.render('pedir');

};

exports.getAdoptar =(request, response, next) => {
    response.render('adoptar');


};

exports.getDatos =(request, response, next) => {
    response.render('datos');

    
};
exports.postDatos=(request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    let nombre=request.body.nombre;
    let dir=request.body.dir;
    let cel=request.body.cel;
    let orden=`Nombre: ${nombre} \nDirección: ${dir}  \nCelular ${cel}`
    filesystem.writeFileSync('orden.txt',orden)
    response.send("Buenos días: " + request.body.nombre + " sus datos han sido guardados :)");

};