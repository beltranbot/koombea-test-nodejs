const { expect } = require('chai')
const { describe, it } = require('mocha')
const chance = require('chance').Chance()

const { NameValidator } = require('../../../utils/NameValidator/NameValidator')

describe('NameValidator', () => {
  it('should return given name trimmed' , () => {
    let name = chance.name()
    let validator = new NameValidator(" " + name + " ")
    expect(validator).to.be.instanceOf(NameValidator)
    expect(validator.getName()).to.be.equal(name)
  })

  it('should return true if it\'s a valid name' , () => {
    let name = chance.name()
    let validator = new NameValidator(" " + name + " ")
    expect(validator).to.be.instanceOf(NameValidator)
    expect(validator.isValid()).to.be.true
  })

  it('it should return false if name include "-"' , () => {
    let name = chance.name()
    let validator = new NameValidator("-" + name)
    expect(validator).to.be.instanceOf(NameValidator)
    expect(validator.isValid()).to.be.false
  })
})
