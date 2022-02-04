const { expect } = require('chai')
const { describe, it } = require('mocha')

const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator');
const { Visa } = require('../../../utils/CreditCardValidator/Visa');
const { CreditCardNumberMocker } = require('../../mocks/CreditCards/CreditCardNumberMocker');

describe('CreditCardValidator Visa', () => {
  it('should validate Visa inn range 4', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard, 4)
    let creditCardNumber = mocker.generate()
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should return false if Visa inn range < 4', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard, 4)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    creditCardNumber[0] = '3'
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, false);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Visa inn range > 4', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard, 4)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    creditCardNumber[0] = '5'
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, false);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Visa length < 13', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard, 4)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    while (creditCardNumber.length >= 13) {
      creditCardNumber.pop()
    }
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, false);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Visa length > 16', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard, 4)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    while (creditCardNumber.length <= 16) {
      creditCardNumber.push('0')
    }
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, false);
    expect(validator.validate()).to.be.false
  })
})
