var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

// exportando a função que faz conexão com o BD
module.exports = function() {
    return connMySQL;
}