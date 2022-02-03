const testController = require('../controllers/testController');

exports.init = (app) => {
  app.get('/', testController.helloWorld);
};
