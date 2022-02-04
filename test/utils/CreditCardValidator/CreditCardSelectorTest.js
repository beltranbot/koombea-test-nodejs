const { expect } = require('chai')
const { describe, it } = require('mocha')
const { MasterCard } = require('../../../utils/CreditCardValidator/MasterCard')
const { CreditCardSelector } = require('../../../utils/CreditCardValidator/CreditCardSelector')
const { CreditCardNumberMocker } = require('../../mocks/CreditCards/CreditCardNumberMocker')
const { Discover } = require('../../../utils/CreditCardValidator/Discover')
const { JCB } = require('../../../utils/CreditCardValidator/JCB')
const { Visa } = require('../../../utils/CreditCardValidator/Visa')

describe('CreditCardSelector', () => {
  it('should recognize American Express card', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Discover card', () => {
    let creditCard = Discover()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize JCB card', () => {
    let creditCard = JCB()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Master Card card', () => {
    let creditCard = MasterCard()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Visa card', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Diners Club International card', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Diners Club United STates & Canada card', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should recognize Diners Club En Route card', () => {
    let creditCard = Visa()
    let mocker = CreditCardNumberMocker(creditCard)
    let creditCardNumber = mocker.generate()
    console.log("mock card:", creditCardNumber);
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal(creditCard.getFranchise())
  })

  it('should return null if credit card number is not valid', () => {
    let creditCardNumber = 'abc123'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.null
  })
})
