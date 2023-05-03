const db = require('../util/database');
module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.id=nueva_pelicula.id || 0;
        this.titulo = nueva_pelicula.titulo || 'Nueva_Pelicula';
        this.productora= nueva_pelicula.productora || 1;
        this.imagen = nueva_pelicula.imagen || 'movie.jpeg';
        this.descripcion = nueva_pelicula.descripcion || 'Descripcion';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute( `
        INSERT INTO peliculas (titulo, imagen, descripcion, idProductora) 
        values (?, ?, ?, ?)
    `, [this.titulo, this.imagen, this.descripcion, this.productora]);
}
static fetchAll(){
    return db.execute(
        `SELECT pe.id, pe.titulo, pe.imagen, pe.descripcion, pr.nombre as productora 
        FROM peliculas pe, productoras pr
        WHERE pe.idProductora = pr.id
            `
        );
    }

    static fetchOne(id){
        return db.execute(
            `SELECT pe.id, pe.titulo, pe.imagen, pe.descripcion,pe.idProductora, pr.nombre as productora 
            FROM peliculas pe, productoras pr
            WHERE pe.idProductora = pr.id AND pe.id = ?
            `, [id]

        );
    }

    static fetch(id){
        if (id){
            return Pelicula.fetchOne(id);
        }else{
            return Pelicula.fetchAll();
        }
    }
    static find(valor_busqueda) {
        return db.execute(
            `SELECT pe.id, pe.titulo, pe.imagen, pe.descripcion, pr.nombre as productora 
            FROM peliculas pe,  productoras pr
            WHERE pe.idProductora = pr.id 
                AND (pe.titulo LIKE ? OR pe.descripcion LIKE ? OR pr.nombre LIKE ?)
            `, 
            [ '%' + valor_busqueda + '%', '%' + valor_busqueda + '%', 
                '%' + valor_busqueda + '%']
        );
    }

}