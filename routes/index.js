// controllers
const testController = require('../controllers/testController');
const contactFilesController = require('../controllers/contactFilesController');
const usersController = require('../controllers/usersController')

// middlewares
const hasOneFileMiddleware = require('../middleware/hasOneFileMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

exports.init = (app) => {
  app.get('/', testController.helloWorld);
  // contact-files
  app.post('/contact-files', authMiddleware, hasOneFileMiddleware, contactFilesController.postContacFiles)
  // users
  app.post('/users', usersController.postUser)
  app.post('/login', usersController.postLogin)
  app.get('/users', authMiddleware, usersController.getUser)
}
