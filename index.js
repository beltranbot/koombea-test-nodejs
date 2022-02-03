const { APP } = require('./config')
const app = require('./server');

const startApp = () => {
  app.listen(APP.port, function () {
    console.log('listening at', APP.port);
  });
};

startApp()
