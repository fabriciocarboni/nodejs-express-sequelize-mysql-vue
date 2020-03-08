//const config = require('dotenv').config(); // include .env file
var config = require('config');

//var settings = config.get('Settings');
//console.log(config.get('Settings.dbConfig.host'));
console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
