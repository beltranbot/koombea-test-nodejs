const { expect } = require('chai');
const { describe, it } = require('mocha');

const { AmericanExpress } = require('../../../utils/CreditCardValidator/AmericanExpress');
const { CreditCardValidator } = require('../../../utils/CreditCardValidator/CreditCardValidator');

describe('CreditCardValidator', () => {
  it('should instantiate CreditCardValidator', () => {
    let validator = CreditCardValidator(AmericanExpress(), '1234567890');
    expect(validator).to.be.instanceOf(Object)
    expect(validator).to.have.property('validate')
  })
})
