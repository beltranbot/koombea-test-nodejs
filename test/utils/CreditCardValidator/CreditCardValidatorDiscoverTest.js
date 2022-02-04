const { expect } = require('chai');
const { describe, it } = require('mocha')
const chance = require('chance').Chance()

const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator')
const { Discover } = require('../../../utils/CreditCardValidator/Discover')
const { CreditCardNumberMocker } = require('../../mocks/CreditCards/CreditCardNumberMocker')

describe('CreditCardValidator Discover', () => {
  it('should validate Discover Card inn range 6011', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, 6011)
    let creditCardNumber = mocker.generate(creditCard)
    console.log(creditCardNumber, 6011);
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate Discover Card inn range 644-649', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, '644-649')
    let creditCardNumber = mocker.generate(creditCard)
    console.log(creditCardNumber, '644-649');
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate Discover Card inn range 65', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, 65)
    let creditCardNumber = mocker.generate(creditCard)
    console.log(creditCardNumber, 65);
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate Discover Card inn range 622126-622925', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, '622126-622925')
    let creditCardNumber = mocker.generate(creditCard)
    console.log(creditCardNumber, '622126-622925');
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should validate Discover Card length 16-19', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, null, '16-19')
    let creditCardNumber = mocker.generate(creditCard)
    console.log(creditCardNumber, 'length 16-19', creditCardNumber.length);
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.true
  })

  it('should return false if Discover Card length < 16', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, null, '16-19')
    let creditCardNumber = mocker.generate(creditCard)
    creditCardNumber = creditCardNumber.split("")
    while (creditCardNumber.length >= 16) {
      creditCardNumber.pop()
    }
    creditCardNumber = creditCardNumber.join('')
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if Discover Card length > 19', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard, null, '16-19')
    let creditCardNumber = mocker.generate(creditCard)
    creditCardNumber = creditCardNumber.split("")
    while (creditCardNumber.length <= 19) {
      creditCardNumber.push(chance.integer({min:0, max:9}))
    }
    creditCardNumber = creditCardNumber.join('')
    let validator = new CreditCardValidator(creditCard, creditCardNumber);
    expect(validator.validate()).to.be.false
  })

  it('should return false if an invalid Discover Card number is passed', () => {
    let creditCard = Discover()
    let validator = new CreditCardValidator(creditCard, '6229264709045570344');
    expect(validator.validate()).to.be.false
  })
})
