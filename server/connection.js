var mysql = require('mysql');

pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Movies'
})

module.exports = pool;