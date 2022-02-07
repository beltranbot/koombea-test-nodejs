const { APP } = require('./config')
const app = require('./server');
const sequelize = require('./database/db')

const startApp = () => {
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
};

startApp()
