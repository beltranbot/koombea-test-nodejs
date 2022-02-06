const { expect } = require('chai');
const { describe, it } = require('mocha');
const { AddressValidator } = require('../../../utils/AddressValidator/AddressValidator');
const chance = require('chance').Chance()

describe('Address Validator', () => {
  it('should instantiate AddressValidator', () => {
    let address = chance.address()
    let validator = new AddressValidator(address)
    expect(validator).to.be.instanceOf(AddressValidator)
  })

  it('should return true if address is valid', () => {
    let address = chance.address()
    let validator = new AddressValidator(address)
    expect(validator.isValid()).to.be.true
    expect(validator.getAddress()).to.be.equal(address)
  })

  it('should return false if address is invalid', () => {
    let validator = new AddressValidator('')
    expect(validator.isValid()).to.be.false
  })
})
