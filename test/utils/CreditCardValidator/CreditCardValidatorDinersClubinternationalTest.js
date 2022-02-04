const { expect } = require('chai');
const { describe, it } = require('mocha');
const chance = require('chance').Chance()

const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator');
const { DinersClubInternational } = require('../../../utils/CreditCardValidator/DinersClubInternational');

describe('CreditCardValidator Diners Club International', () => {
  it('should validate Diner Club International Card inn range 36', () => {
    let validator = new CreditCardValidator(DinersClubInternational(), '36123456789012');
    expect(validator.validate()).to.be.true
  })

  it('should validate Diner Club International Card length range 14-19', () => {
    let length = chance.integer({ min: 1, max: 6 })
    let head = '3612345678901'
    let tail = []
    for (let i = 0; i < length; i++) {
      tail.push(chance.integer({ min: 0, max: 9}))
    }
    tail = tail.reduce((a, c) => a + c, '')
    let validator = new CreditCardValidator(DinersClubInternational(), head + tail);
    expect(validator.validate()).to.be.true
  })

  it('should return false if Diner Club International Card length range < 14', () => {
    let validator = new CreditCardValidator(DinersClubInternational(), '3612345678901');
    expect(validator.validate()).to.be.false
  })

  it('should return false if Diner Club International Card length range > 19', () => {
    let validator = new CreditCardValidator(DinersClubInternational(), '36123456789012345678');
    expect(validator.validate()).to.be.false
  })
})
