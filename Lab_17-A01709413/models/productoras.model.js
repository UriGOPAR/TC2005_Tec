const db = require('../util/database');

module.exports = class Productora {

    constructor() {

    }

    save() {

    }

    static fetchAll() {
        return db.execute(`
            SELECT id, nombre
            FROM productoras
        `);
    }
}