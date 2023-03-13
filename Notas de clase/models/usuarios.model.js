const db = require('../util/database');

module.exports = class Usuario {

    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || 'John Doe';
        this.username = nuevo_usuario.username || 'johndoe';
        this.password = nuevo_usuario.password || 'johndoejohndoe';
    }

    save() {
        return db.execute(`
            INSERT INTO usuarios (nombre, username, password)
            values (?, ?, ?)
        `, [this.nombre, this.username, this.password]);
    }

}