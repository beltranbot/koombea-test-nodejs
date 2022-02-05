const { expect } = require('chai');
const { describe, it } = require('mocha');
const { PhoneValidator } = require('../../../utils/PhoneValidator/PhoneValidator');
const { PhoneMocker } = require('../../mocks/Phone/PhoneMocker');

describe('PhoneValidator', () => {
  it('should validate phone numbers with space as separator', () => {
    let mocker = new PhoneMocker()
    let phone = mocker.getPhone(' ')
    console.log('phone:', phone);
    let validator = new PhoneValidator(" " + phone)
    expect(validator.isValid()).to.be.true
    expect(validator.getPhone()).to.be.equal(phone)
  })

  it('should validate phone numbers with minus (-) as separator', () => {
    let mocker = new PhoneMocker()
    let phone = mocker.getPhone('-')
    console.log('phone:', phone);
    let validator = new PhoneValidator(phone)
    expect(validator.isValid()).to.be.true
    expect(validator.getPhone()).to.be.equal(phone)
  })

  it('should return false if given a invalid phone number', () => {
    let mocker = new PhoneMocker()
    let phone = mocker.getInvalidNumber()
    console.log('invalid phone:', phone);
    let validator = new PhoneValidator(phone)
    expect(validator.isValid()).to.be.false
  })
})
