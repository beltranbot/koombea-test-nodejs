const { expect } = require('chai')
const { describe, it } = require('mocha')

const { AmericanExpress } = require('../../../utils/CreditCardValidator/AmericanExpress')
const { CreditCardValidator}  = require('../../../utils/CreditCardValidator/CreditCardValidator')

describe('CreditCardValidator', () => {
  it('should instantiate CreditCardValidator', () => {
    let validator = new CreditCardValidator(AmericanExpress())
    expect(validator).to.be.instanceOf(CreditCardValidator)
    expect(validator).to.have.property('isValid')
    expect(validator).to.have.property('getFranchise')
  })

  it('should validate American Express card', () => {
    let validator = new CreditCardValidator('5271730929591363')
    expect(validator).to.be.instanceOf(CreditCardValidator)
    expect(validator).to.have.property('isValid')
    expect(validator).to.have.property('getFranchise')
    expect(validator.isValid()).to.have.true
    expect(validator.getFranchise()).to.be.equal('mastercard')
  })

  it('should return false if card is not valid', () => {
    let validator = new CreditCardValidator('1234567890')
    expect(validator).to.be.instanceOf(CreditCardValidator)
    expect(validator).to.have.property('isValid')
    expect(validator).to.have.property('getFranchise')
    expect(validator.isValid()).to.have.false
    expect(validator.getFranchise()).to.be.null
  })
})
