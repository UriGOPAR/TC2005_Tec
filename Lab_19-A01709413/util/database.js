const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'lab_17',
    password: '',
});

module.exports = pool.promise();