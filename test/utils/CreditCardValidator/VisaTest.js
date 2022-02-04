const { expect } = require('chai');
const { describe, it } = require('mocha');

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { Visa } = require('../../../utils/CreditCardValidator/Visa');

describe('Visa', () => {
  it('it should instantiate a Visa card', () => {
    let creditCard = Visa();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
