const { expect } = require('chai');
const { describe, it } = require('mocha');

const { AmericanExpress } = require('../../../utils/CreditCardValidator/AmericanExpress');
const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard');
const { DinersClubEnRoute } = require('../../../utils/CreditCardValidator/DinersClubEnRoute');
const { DinersClubInternational } = require('../../../utils/CreditCardValidator/DinersClubInternational');

describe('CreditCard', () => {
  it('should instantiate a credit card', () => {
    let creditCard = new CreditCard('test-card', [1, '2-4', 7], [4, 6, 7])
    expect(creditCard).to.be.instanceOf(CreditCard);
  });

  it('should return valid values for American Express Card', () => {
    let creditCard = AmericanExpress();
    expect(creditCard).to.be.instanceOf(CreditCard);
    expect(creditCard.getFranchise()).to.be.equal('American Express');
    expect(creditCard.getValidInnRanges()).to.deep.equal([34, 37]);
    expect(creditCard.getValidLengths()).to.deep.equal([15]);
  });

  it('should return valid values for Diners club En Route Card', () => {
    let creditCard = DinersClubEnRoute();
    expect(creditCard).to.be.instanceOf(CreditCard);
    expect(creditCard.getFranchise()).to.be.equal('Diners Club');
    expect(creditCard.getValidInnRanges()).to.deep.equal([]);
    expect(creditCard.getValidLengths()).to.deep.equal([15]);
  });

  it('should return valid values for Diners club International Card', () => {
    let creditCard = DinersClubInternational();
    expect(creditCard).to.be.instanceOf(CreditCard);
    expect(creditCard.getFranchise()).to.be.equal('Diners Club');
    expect(creditCard.getValidInnRanges()).to.deep.equal([36]);
    expect(creditCard.getValidLengths()).to.deep.equal(['14-19']);
  });
});