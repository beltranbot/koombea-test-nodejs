const User = require("../models/user")
const authService = require('../services/authService')

// check if username is already registered
// check that username is present
// check that username is at least 5 characters long
// check that username is less than 255 chacters long

// check that password is preseent
// check that password is at least 8 characters long
// check that password is less than 255 characters long
exports.postUser = async (req, res) => {
  const { username, password } = req.body
  const hash = await authService.hashPassword(password)
  if (!hash) {
    return res.status(500)
      .send({ message: 'Password couldn\'t be hashed' })
  }
  const user = new User({
    username,
    password: hash
  })
  user.save()
    .then(user => res.status(201)
      .send({
        id: user.id,
        username: user.username
      }))
}

exports.postLogin = async (req, res) => {
  const { username, password } = req.body
  const token = await authService.login(username, password)
  if (!token) {
    return res.status(404)
      .send({ message: 'user not found' })
  }
  return res.status(200)
    .send({ token })
}

// check that bearer token is present
exports.getUser = async (req, res) => {
  const authorization = req.headers.authorization.split(' ')[1]
  const user = await authService.verifyToken(authorization)
  if (!user) {
    return res.status(404)
      .send({ message: 'UNAUTHORIZED' })
  }
  return res.status(200)
    .send({
      user: {
        id: user.id,
        username: user.username
      }
    })
}
