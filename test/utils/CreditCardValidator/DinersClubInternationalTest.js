const { expect } = require('chai');
const { describe, it } = require('mocha');

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { DinersClubInternational } = require('../../../utils/CreditCardValidator/DinersClubInternational');

describe('Diners Club International', () => {
  it('it should instantiate a Diners Club International credit card', () => {
    let creditCard = DinersClubInternational();
    expect(creditCard).to.be.instanceOf(CreditCard);
  });
});
