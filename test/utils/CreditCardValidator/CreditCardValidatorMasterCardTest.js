const { expect } = require('chai')
const { describe, it } = require('mocha')

const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator');
const { MasterCard } = require('../../../utils/CreditCardValidator/MasterCard');
const { CreditCardNumberMocker } = require('../../mocks/CreditCards/CreditCardNumberMocker');

describe('CreditCardValidator Master Card', () => {
  it('should validate Master card inn range 2221-2720', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard, '2221-2720')
    let creditCardNumber = mocker.generate()
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate Master card inn range 51-55', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard, '51-55')
    let creditCardNumber = mocker.generate()
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should return false if Master card number length < 16', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    creditCardNumber.pop()
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Master card number length > 16', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    creditCardNumber += '0'
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Master card inn range < 51', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard, '51-55')
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    creditCardNumber[1] = '0'
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Master card inn range > 55', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard, '51-55')
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split('')
    creditCardNumber[1] = '6'
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })
})
