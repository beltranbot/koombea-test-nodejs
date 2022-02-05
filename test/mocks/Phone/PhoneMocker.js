const chance = require('chance').Chance()

const separators = [' ', '-']

class PhoneMocker {
  getPhone(separator = null) {
    return this.generateRandomPhone(separator)
  }

  getInvalidNumber() {
    let number = this.generateRandomPhone(separators[chance.integer({min: 0, max: 1})])
    let i = chance.integer({min: 0, max: number.length - 1})
    number = number.split('')
    number[i] = 'x'
    return number.join('')
  }

  generateRandomPhone(separator) {
    let identifier = chance.integer({ min: 1, max: 99})
    let firstThree = this.nDigits(chance.integer({min: 0, max: 999}), 3)
    let secondThree = this.nDigits(chance.integer({min: 0, max: 999}), 3)
    let firstTwo = this.nDigits(chance.integer({min: 0, max: 99}), 2)
    let secondTwo = this.nDigits(chance.integer({min: 0, max: 99}), 2)
    if (!separator) {
      separator = separators[chance.integer({min: 0, max: 1})]
    }
    return `(+${identifier}) ${firstThree}${separator}${secondThree}${separator}${firstTwo}${separator}${secondTwo}`
  }

  nDigits(num, digits) {
    let strNum = "" + num;
    while (strNum.length < digits) {
      strNum = '0' + strNum
    }
    return strNum
  }

}

module.exports = { PhoneMocker }
