const { expect } = require('chai');
const { describe, it } = require('mocha');

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { Discover } = require('../../../utils/CreditCardValidator/Discover');

describe('Discover', () => {
  it('it should instantiate a Discover credit card', () => {
    let creditCard = Discover();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
