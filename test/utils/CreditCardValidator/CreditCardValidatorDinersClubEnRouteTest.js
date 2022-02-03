const { expect } = require('chai')
const { describe, it } = require('mocha')

const { CreditCardValidator } = require('../../../utils/CreditCardValidator/CreditCardValidator')
const { DinersClubEnRoute } = require('../../../utils/CreditCardValidator/DinersClubEnRoute')

describe('CreditCardValidator Diners Club En Route', () => {
  it('should validate Diner Club En Route Card of length 15', () => {
    let validator = CreditCardValidator(DinersClubEnRoute(), '305693090259041')
    expect(validator.validate()).to.be.true
  })

  it('should return false if Diners Club Card length is > 15', () => {
    let validator = CreditCardValidator(DinersClubEnRoute(), '3056930902590412')
    expect(validator.validate()).to.be.false
  })

  it('should return false if Diners Club Card length is < 15', () => {
    let validator = CreditCardValidator(DinersClubEnRoute(), '30569309025904')
    expect(validator.validate()).to.be.false
  })
})
