const chance = require('chance').Chance()

exports.CreditCardNumberMocker = (creditCard, innRange = null, length = null) => {
  const validateInput = () => {
    if (innRange) {
      validateInnRange()
    }
    if (length) {
      validateLength()
    }
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
    let innRangeLength = creditCard.getValidInnRanges().length
    if (innRangeLength === 0) {
      return null
    }
    let i = chance.integer({ min: 0, max: innRangeLength - 1})
    return creditCard.getValidInnRanges()[i]
  }

  const getRandomLength = () => {
    let length = creditCard.getValidLengths().length
    let i = chance.integer({ min: 0, max: length - 1 })
    return creditCard.getValidLengths()[i]
  }

  const generate = () => {
    let input = {}
    input.innRange = !innRange ? getRandomInnRange() : innRange
    input.length = !length ? getRandomLength() : length
    let head = generateHead(input.innRange)
    let tail = generateTail(input.length, head)
    return head + tail
  }

  const generateHead = (innRange) => {
    if (!innRange) {
      return chance.integer({min: 10, max: 99})
    }
    if (isNaN(innRange)) {
      let [min, max] = innRange.split('-').map(x => +x)
      return chance.integer({ min, max })
    }
    return innRange
  }

  const generateTail = (length, head) => {
    let tailLength = 0
    if (isNaN(length)) {
      let [min, max] = length.split('-').map(x => +x)
      let actualLength = chance.integer({ min, max })
      tailLength = actualLength - ('' + head).length
    } else {
      tailLength = length - ('' + head).length
    }
    return generateFromTailLength(tailLength)
  }

  const generateFromTailLength = (length) => {
    let max = []
    for (let i = 0; i < length; i++) {
      max.push('9')
    }
    max = parseInt(max.reduce((a, c) => c + a, ''))
    let tail = chance.integer({ min: 1, max }) + ""
    while (tail.length < length) {
      tail = '0' + tail
    }
    return tail
  }

  validateInput()

  return { generate }
}
