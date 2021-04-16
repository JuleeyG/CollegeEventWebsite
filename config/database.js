const { Sequelize } = require('sequelize');

module.exports = new Sequelize('UserEventDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false,
  define: { timestamps: false},
  port: '3308',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
