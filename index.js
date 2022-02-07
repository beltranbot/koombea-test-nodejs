const { APP } = require('./config')
const app = require('./server');
const sequelize = require('./database/db');
const ContactFile = require('./models/contactFile');
const User = require('./models/user');
const Contact = require('./models/Contact');

// move this to another file
ContactFile.belongsTo(User, {
  foreignKey: 'user_id',
  constraints: true,
  onDelete: 'CASCADE'
})
User.hasMany(ContactFile, {
  foreignKey: 'user_id'
})
Contact.belongsTo(User, {
  foreignKey: 'user_id',
  constraints: true,
  onDelete: 'CASCADE'
})
Contact.belongsTo(ContactFile, {
  foreignKey: 'contact_file_id',
  constraints: true,
  onDelete: 'CASCADE'
})
User.hasMany(Contact, {
  foreignKey: 'user_id'
})
ContactFile.hasMany(Contact, {
  foreignKey: 'contact_file_id'
})

const startApp = () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      sequelize
      .authenticate()
      .then(() => {
        console.log('connected to db')
        app.listen(APP.port, function () {
          console.log('listening at', APP.port)
        })
      })
      .catch(() => {
        console.log('couldn\'t connect to db.. retrying in 10 seconds...');
        setTimeout(startApp, 10000);
      })
    })
};

startApp()
