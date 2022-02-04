const { expect } = require('chai');
const { describe, it } = require('mocha');
const chance = require('chance').Chance()

const {
  CreditCardValidator
} = require('../../../utils/CreditCardValidator/CreditCardValidator');
const {
  DinersClubUnitedStatesAndCanada
} = require('../../../utils/CreditCardValidator/DinersClubUnitedStatesAndCanada');

describe('CreditCardValidator United States & Canada Club International', () => {
  it('should validate Diner Club United States & Canada Card inn range 54', () => {
    let validator = new CreditCardValidator(DinersClubUnitedStatesAndCanada(), '5412345678910123');
    expect(validator.validate()).to.be.true
  })

  it('should validate Diner Club United States & Canada Card inn range different to 54', () => {
    let head = 54
    while (head !== 54) {
      head = chance.integer({min: 10, max: 99})
    }
    let tail = '12345678910123'
    let validator = new CreditCardValidator(DinersClubUnitedStatesAndCanada(), head + tail);
    expect(validator.validate()).to.be.true
  })

  it('should return false if Diner Club United States & Canada Card length < 16', () => {
    let validator = new CreditCardValidator(DinersClubUnitedStatesAndCanada(), '541234567891012');
    expect(validator.validate()).to.be.false
  })

  it('should return false if Diner Club United States & Canada Card length > 16', () => {
    let validator = new CreditCardValidator(DinersClubUnitedStatesAndCanada(), '54123456789101234');
    expect(validator.validate()).to.be.false
  })
})
