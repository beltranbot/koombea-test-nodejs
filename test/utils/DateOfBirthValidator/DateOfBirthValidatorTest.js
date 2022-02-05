const { expect } = require('chai')
const { describe, it } = require('mocha')

const { DateOfBirthValidator } = require('../../../utils/DateOfBirthValidator/DateOfBirthValidator')
const { DateMocker } = require('../../mocks/Date/DateMocker')

describe('DateOfBirthValidator', () =>  {
  it('should instantiate DateOfBirthValidator %Y%m%d format', () => {
    let mocker = new DateMocker()
    let date = mocker.getRandomDate('YYYYMMDD')
    let validator = new DateOfBirthValidator(date)
    expect(validator.isValid()).to.be.true
    expect(validator.getDOB()).to.be.equal(date)
  })

  it('should instantiate DateOfBirthValidator %F format', () => {
    let mocker = new DateMocker()
    let date = mocker.getRandomDate('YYYY-MM-DD')
    let validator = new DateOfBirthValidator(date)
    expect(validator.isValid()).to.be.true
    expect(validator.getDOB()).to.be.equal(date)
  })

  it('return false if date is invalid', () => {
    let mocker = new DateMocker()
    let date = mocker.getInvalidDate()
    let validator = new DateOfBirthValidator(date)
    expect(validator.isValid()).to.be.false
  })
})
