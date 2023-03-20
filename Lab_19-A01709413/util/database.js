const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'pelis',
    password: '',
});

module.exports = pool.promise();