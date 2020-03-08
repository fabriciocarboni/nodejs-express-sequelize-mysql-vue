var mysqldb = require('mysql');

var con = mysqldb.createConnection({
  host: 'localhost',
  port: '3386',
  user: 'root',
  password: ''
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});
