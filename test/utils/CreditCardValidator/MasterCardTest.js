const { expect } = require('chai');
const { describe, it } = require('mocha');

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { MasterCard } = require('../../../utils/CreditCardValidator/MasterCard');

describe('Master Card', () => {
  it('it should instantiate a Master Card card', () => {
    let creditCard = MasterCard();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
