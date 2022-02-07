// controllers
const testController = require('../controllers/testController');
const contactFilesController = require('../controllers/contactFilesController');
const usersController = require('../controllers/usersController')

// middlewares
const hasOneFileMiddleware = require('../middleware/hasOneFileMiddleware');

exports.init = (app) => {
  app.get('/', testController.helloWorld);
  // contact-files
  app.post('/contact-files', hasOneFileMiddleware, contactFilesController.postContacFiles)
  // users
  app.post('/users', usersController.postUser)
  app.post('/login', usersController.postLogin)
  app.get('/users', usersController.getUser)
}
