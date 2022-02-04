const { expect } = require('chai');
const { describe, it } = require('mocha');

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { JCB } = require('../../../utils/CreditCardValidator/JCB');

describe('JCB', () => {
  it('it should instantiate a JCB credit card', () => {
    let creditCard = JCB();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
