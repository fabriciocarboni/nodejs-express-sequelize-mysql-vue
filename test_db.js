var mysqldb = require('mysql');
require('dotenv').config(); // include .env file

var con = mysqldb.createConnection({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASS
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});
