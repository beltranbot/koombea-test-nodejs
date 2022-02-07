const Sequelize = require('sequelize')

const sequelize = require('../database/db')

const Contact = sequelize.define('contacts', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  contactFileId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'contact_file_id'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creditCard: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'credit_card'
  },
  franchise: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

module.exports = Contact
