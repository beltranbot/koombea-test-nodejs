const { expect } = require('chai');
const { describe, it } = require('mocha');

const { AmericanExpress } = require('../../../utils/CreditCardValidator/AmericanExpress');
const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');

describe('American Express', () => {
  it('it should instantiate a American Express credit card', () => {
    let creditCard = AmericanExpress();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
