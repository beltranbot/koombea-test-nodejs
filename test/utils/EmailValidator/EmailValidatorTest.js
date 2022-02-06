const { expect } = require('chai');
const { describe, it } = require('mocha');
const { EmailValidator } = require('../../../utils/EmailValidator/EmailValidator');
const chance = require('chance').Chance()

describe('EmailValidator', () => {
  it('should instantiate EmailValidator', () => {
    let email = chance.email()
    let validator = new EmailValidator(email)
    expect(validator).to.be.instanceOf(EmailValidator)
  })

  it('should should return true if valid email is given', () => {
    let email = chance.email()
    let validator = new EmailValidator(email)
    expect(validator.isValid()).to.be.true
    expect(validator.getEmail()).to.be.equal(email)
  })

  it('should should return false if invalid email is given', () => {
    let email = chance.email()
    email = email.replace('@', 'x')
    let validator = new EmailValidator(email)
    expect(validator.isValid()).to.be.false
  })
})
