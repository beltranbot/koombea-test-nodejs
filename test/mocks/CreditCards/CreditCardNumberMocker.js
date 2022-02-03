const chance = require('chance').Chance()

const { Discover } = require('../../../utils/CreditCardValidator/Discover')

exports.CreditCardNumberMocker = (type, innRange = null, length = null) => {
  let creditCard = getCreditCardByType()
  validateInput()

  const validateInput = () => {
    if (innRange) {
      validateInnRange()
    }
    if (length) {
      validateLength()
    }
  }

  const getCreditCardByType = () => {
    if (type === 'Discover') {
      return Discover()
    }
    return null
  }

  const validateInnRange = () => {
    if (!creditCard.getValidInnRanges().includes(innRange)) {
      throw new "innRange not found"
    }
  }

  const validateLength = () => {
    if (!creditCard.getValidLengths().includes(length)) {
      throw new "Length not found"
    }
  }

  const getRandomInnRange = () => {
    let innRangeLength = creditCard.getValidInnRanges().length()
    if (innRangeLength === 0)  {
      return chance.integer({min: 1, max: 99})
    }
    let i = chance.integer({min: 0})
    return 
  }

  const generate = () => {
    if (!innRange) {
      getRandomInnRange()
    }
  }

};