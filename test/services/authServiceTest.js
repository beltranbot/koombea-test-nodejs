const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcrypt')

const User = require('../../models/user');
const authService = require('../../services/authService');
const jwt = require('jsonwebtoken');

describe('authService.login',  () => {
  it('should return false if user was not found',  (done) => {
    const username = 'username';
    const password = 'password';
    const userFindOneStub = sinon.stub(User, 'findOne').callsFake( () => {
      return false;
    });
    authService.login(username, password)
      .then(result => {
        expect(result).to.false;
        userFindOneStub.restore();
        done();
      })
      .catch(done);
  });

  it('should return false if it fails to verify token',  (done) => {
    const username = 'username';
    const password = 'invalid_password';
    const userFindOneStub = sinon.stub(User, 'findOne').callsFake( () => {
      return {
        salt: 'salt',
        password: 'password'
      };
    });
    const bcryptComparStub = sinon.stub(bcrypt, 'compare').callsFake( () => {
      return false
    });
    authService.login(username, password)
      .then(result => {
        expect(result).to.be.false
        userFindOneStub.restore()
        bcryptComparStub.restore()
        done();
      })
      .catch(done);
  });

  it('should return a token if the credentails are valid', (done) => {
    const username = 'admin';
    const password = 'secret';
    const userFindOneStub = sinon.stub(User, 'findOne').callsFake(() => {
      return {
        id: 1,
        username: 'admin',
        password: '1$2b$10$Y3e0egsT9zin0MlbwtlX7ujWp4LznR7VU.7Tf3yqi9X73YvCKukBe'
      };
    });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const bcryptComparStub = sinon.stub(bcrypt, 'compare').callsFake(() => {
      return true
    });
    const jwtSignStub = sinon.stub(jwt, 'sign').callsFake(() => {
      return token
    });
    authService.login(username, password)
      .then(result => {
        expect(result).to.equal(token);
        userFindOneStub.restore();
        bcryptComparStub.restore();
        jwtSignStub.restore();
        done();
      })
      .catch(done);
  });
});

describe('authService.verifyToken', () => {
  it('should return false if jwt.verify throws error', () => {
    expect(authService.verifyToken('invalid-token')).to.be.false;
  });

  it('should return true if credentials are valid', () => {
    const jwtVerifyStub = sinon.stub(jwt, 'verify').callsFake(() => {
      return true;
    });
    expect(authService.verifyToken('a-valid-token')).to.be.true;
    jwtVerifyStub.restore()
  });
});

describe('authService.hashPassword', () => {
  it('should hash password', (done) => {
    const password = 'secret'
  const hash = '$2b$10$Y3e0egsT9zin0MlbwtlX7ujWp4LznR7VU.7Tf3yqi9X73YvCKukBe'
  const bcryptHashStub = sinon.stub(bcrypt, 'hash').callsFake(() => {
    return hash
  })
  authService.hashPassword(password)
    .then(result => {
      expect(result).to.be.equal(hash)
      bcryptHashStub.restore()
      done()
    })
    .catch(done)
  })
})
