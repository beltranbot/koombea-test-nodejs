const { expect } = require('chai')
const { describe, it } = require('mocha')

const { CreditCardValidator } = require('../../../utils/CreditCardValidator/CreditCardValidator');
const { JCB } = require('../../../utils/CreditCardValidator/JCB');
const { CreditCardNumberMocker } = require('../../mocks/CreditCards/CreditCardNumberMocker');

describe('CreditCardValidator JCB', () => {
  it('should validate validate JCB card inn range 3528-3589', () => {
    let creditCard = JCB()
    let mocker = CreditCardNumberMocker(creditCard, '3528-3589')
    let creditCardNumber = mocker.generate()
    console.log('creditCardNumber:', creditCardNumber)
    let validator = CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate validate JCB card length 16-19', () => {
    let creditCard = JCB()
    let mocker = CreditCardNumberMocker(creditCard, null, '16-19')
    let creditCardNumber = mocker.generate()
    console.log('creditCardNumber:', creditCardNumber, creditCardNumber.length)
    let validator = CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should return false if JCB card inn range < 3528', () => {
    let creditCard = JCB()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split("")
    creditCardNumber[2] = '2'
    creditCardNumber[3] = '7'
    creditCardNumber = creditCardNumber.join('')
    console.log('creditCardNumber:', creditCardNumber)
    let validator = CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if JCB card inn range > 3589', () => {
    let creditCard = JCB()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    creditCardNumber = creditCardNumber.split("")
    creditCardNumber[2] = '9'
    creditCardNumber[3] = '0'
    creditCardNumber = creditCardNumber.join('')
    let validator = CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })
})
