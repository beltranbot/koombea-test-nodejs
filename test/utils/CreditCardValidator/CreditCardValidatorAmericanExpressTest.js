const { expect } = require('chai');
const { describe, it } = require('mocha');
const chance = require('chance').Chance()

const { AmericanExpress } = require('../../../utils/CreditCardValidator/AmericanExpress');
const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator');

describe('CreditCardValidator American Express', () => {
  it('should validate American Express Card starting with 37', () => {
    let validator = new CreditCardValidator(AmericanExpress(), '371449635398431');
    expect(validator.validate()).to.be.true
  })

  it('should validate American Express Card starting with 34', () => {
    let validator = new CreditCardValidator(AmericanExpress(), '341449635398431');
    expect(validator.validate()).to.be.true
  })

  it('should return false if American Express Card has wrong length > 15', () => {
    let validator = new CreditCardValidator(AmericanExpress(), '3714496353984310');
    expect(validator.validate()).to.be.false
  })

  it('should return false if American Express Card has wrong length < 15', () => {
    let validator = new CreditCardValidator(AmericanExpress(), '37144963539843');
    expect(validator.validate()).to.be.false
  })

  it('should return false if American Express Card has wrong inn range', () => {
    let head = 34;
    while (head === 34 || head === 37) {
      head = chance.integer({ min: 10, max: 99});
    }
    let validator = new CreditCardValidator(AmericanExpress(), ("" + head)+ '1449635398431');
    expect(validator.validate()).to.be.false
  })
})
