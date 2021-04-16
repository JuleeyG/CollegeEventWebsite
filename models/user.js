const { Sequelize } = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    //primaryKey: true
  },
  password: {
    type: Sequelize.STRING
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  university: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
})

module.exports = User;
