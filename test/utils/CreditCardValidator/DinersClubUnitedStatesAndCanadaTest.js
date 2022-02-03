const { expect } = require('chai')
const { describe, it } = require('mocha')

const { CreditCard } = require('../../../utils/CreditCardValidator/CreditCard')
const {
  DinersClubUnitedStatesAndCanada
} = require('../../../utils/CreditCardValidator/DinersClubUnitedStatesAndCanada')

describe('Diners Club United States & Canada', () => {
  it('it should instantiate a Diners Club United States & Canada credit card', () => {
    let creditCard = DinersClubUnitedStatesAndCanada()
    expect(creditCard).to.be.instanceOf(CreditCard)
  })
})
