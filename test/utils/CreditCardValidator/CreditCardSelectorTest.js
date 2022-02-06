const { expect } = require('chai')
const { describe, it } = require('mocha')
const { CreditCardSelector } = require('../../../utils/CreditCardValidator/CreditCardSelector')

describe('CreditCardSelector', () => {
  it('should recognize American Express card', () => {
    let creditCardNumber = '341352856147916'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('american-express')
  })

  it('should recognize Discover card', () => {
    let creditCardNumber = '6011026798539895'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('discover')
  })

  it('should recognize JCB card', () => {
    let creditCardNumber = '3530111333300000'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('jcb')
  })

  it('should recognize Master Card card', () => {
    let creditCardNumber = '5365632166337012'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('mastercard')
  })

  it('should recognize Visa card', () => {
    let creditCardNumber = '4539383513502528'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('visa')
  })

  it('should recognize Diners Club card', () => {
    let creditCardNumber = '36556348004168'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.equal('diners-club')
  })

  it('should return null if credit card number is not valid', () => {
    let creditCardNumber = 'abc123'
    let selector = new CreditCardSelector(creditCardNumber)
    expect(selector.getFranchise()).to.be.null
  })
})
