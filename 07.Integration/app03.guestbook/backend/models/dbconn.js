const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'webdb',
        password: 'webdb',
        database: 'webdb'
    });
}