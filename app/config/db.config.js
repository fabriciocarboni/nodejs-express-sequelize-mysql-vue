const config = require('dotenv').config(); // include .env file

module.exports = {
  HOST: process.env.MYSQL_HOST,
  USER: process.env.DEV_DB_USER,
  PORT: process.env.MYSQL_PORT,
  PASSWORD: process.env.MYSQL_PASS,
  DB: process.env.MYSQL_DB,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
