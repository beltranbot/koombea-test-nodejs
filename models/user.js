const Sequelize = require('sequelize')

const sequelize = require('../database/db')

const User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  timestamps: false
});

module.exports = User
