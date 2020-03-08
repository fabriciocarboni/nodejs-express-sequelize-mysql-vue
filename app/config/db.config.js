module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PORT: '3386',
  PASSWORD: '',
  DB: 'test-node-vue',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
