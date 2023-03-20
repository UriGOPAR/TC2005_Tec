    const perros =[
        {
            raza: "Beagle" 
        },
        {
            raza: "Golden" 
        },
    ];
    module.exports = class Registro {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_perro) {
        this.raza = nuevo_perro.raza || 'delmer';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        perros.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return perros;
    }

}