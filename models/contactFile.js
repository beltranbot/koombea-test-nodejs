const Sequelize = require('sequelize')

const sequelize = require('../database/db')

const ContactFile = sequelize.define('contact_files', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  originalFilename: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'original_filename'
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state:{
    type: Sequelize.ENUM([
      'uploading',
      'failed upload',
      'on hold',
      'processing',
      'failed',
      'finished'
    ]),
    defaultValue: 'uploading'
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  
})

module.exports = ContactFile
