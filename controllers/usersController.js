const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const config = require('../config')
const User = require("../models/user")

// check if username is already registered
// check that username is present
// check that username is at least 5 characters long
// check that username is less than 255 chacters long

// check that password is preseent
// check that password is at least 8 characters long
// check that password is less than 255 characters long
exports.postUser = (req, res) => {
  const { username, password } = req.body
  bcrypt.genSalt(config.BCRYPT.saltRounds, function (err, salt) {
    if (err) {
      return res.status(500)
        .send({ message: 'Unable to generate salt' })
    }
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        return res.status(500)
          .send({ message: 'Unable to hash password' })
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
    });
  });
}

exports.postLogin = (req, res) => {
  const { username, password } = req.body
  User.findOne({ where: { username } })
    .then((user) => {
      if (!user) {
        return res.status(404)
          .send({ message: 'user not found' })
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return res.status(500)
            .send({ message: 'password couldn\'t be validated' })
        }
        if (!result) {
          return res.status(404)
            .send({ message: 'user not found' })
        }
        const data = {
          id: user.id,
          username: user.username
        }
        const token = jwt.sign(data, config.JWT.secret);
        return res.status(200)
          .send({ token })
      });
    })
}

// check that bearer token is present
exports.getUser = (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    const decoded = jwt.verify(token, config.JWT.secret)
    console.log(decoded);
    return res.status(200)
      .send({
        user: {
          id: decoded.id,
          username: decoded.username
        }
      })
  } catch (e) {
    res.status(401).send({ message: 'unauthorized' })
  }


}