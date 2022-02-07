const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

exports.login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return false;
  }
  const isValidPassword = await verifyPassword(user, password) 
  if (!isValidPassword) {
    return false
  }
  return generateToken(user);
}

exports.verifyToken = (authorization) => {
  try {
    return jwt.verify(authorization, config.JWT.secret);
  } catch (err) {
    return false;
  }
}

exports.hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, config.BCRYPT.saltRounds)
  return hash
}

const verifyPassword = async (user, password) => {
  const valid = bcrypt.compare(password, user.password)
  return valid
}

const generateToken = user => {
  const data = {
    id: user.id,
    username: user.username
  };
  return jwt.sign(data, config.JWT.secret);
}