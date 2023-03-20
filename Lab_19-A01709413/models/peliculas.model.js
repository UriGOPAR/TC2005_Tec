const db = require('../util/database');
    /*
    { 
        titulo: 'The Lord Of the Rings',
        productora: "New Line Cinema", 
        imagen: "https://assets-prd.ignimgs.com/2022/05/16/lotrfellowship-1652740286087.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        titulo: 'StarWars III',
        productora: "LucasFilm",
        imagen: "http://3.bp.blogspot.com/-ttRQzlgtvas/VnMR6EyvelI/AAAAAAAAL1I/U9qgqCV8PGY/s1600/revenge_of_the_sith.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        titulo: 'Your Name',
        productora: "CoMix Wave Films",
        imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/your-name-poster-1547566631.jpeg?crop=0.8xw:1xh;center,top&resize=1200:*", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        titulo: "Transformers",
        productora: 'Hasbro',
        imagen: "https://lumiere-a.akamaihd.net/v1/images/transformers_el_lado_oscuro_de_la_luna-121329126-large_bd791f0f.jpeg?region=128,0,1024,1024", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        titulo: 'Jhon Whick',
        productora: "Lion Gate Entertainment",
        imagen: "https://es.rollingstone.com/wp-content/uploads/2021/12/John-Wick-4-vera-la-luz-hasta-2023.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        titulo: 'Pugberto',
        productora: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        titulo: 'Pugberto',
        productora: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        titulo: 'Pugberto',
        productora: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }  
];*/

module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.titulo = nueva_pelicula.titulo || 'Nueva_Pelicula';
        this.productora= nueva_pelicula.productora || 'Delmer';
        this.imagen = nueva_pelicula.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
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
        `SELECT pe.id, pe.titulo, pe.imagen, pe.descripcion, pe.created_at, pr.nombre as productora 
        FROM peliculas pe, productoras pr
        WHERE pe.idProductora = pr.id
            `
        );
    }

    static fetchOne(id){
        return db.execute(
            `SELECT pe.id, pe.titulo, pe.imagen, pe.descripcion, pe.created_at, pr.nombre as productora 
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

}