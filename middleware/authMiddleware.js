const authService = require('../services/authService');

module.exports = (req, res, next) => {
  const authorization = getAuthorizationHeader(req);
  const decoded = authService.verifyToken(authorization[1])
  const isAuthorized = (
    authorization &&
    isBearerTokenPresent(authorization) &&
    decoded
  );
  if (!isAuthorized) {
    return unauthorized(res);
  }
  req.auth = { user: decoded}
  return next();
}

const getAuthorizationHeader = (req) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return false;
  }
  return authorization.split(' ');
}

const isBearerTokenPresent = (authorization) => {
  return authorization.length === 2 && authorization[0] === 'Bearer';
}

const unauthorized = (res) => {
  return res.status(401)
    .send({ message: 'UNAUTHORIZED' });
}
