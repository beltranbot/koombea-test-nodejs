const Sequelize = require('sequelize')

const sequelize = require('../database/db')

const User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  
})

module.exports = User
