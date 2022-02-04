exports.CreditCardValidator = class {

  constructor(creditCard, cardNumber) {
    this.creditCard = creditCard
    this.cardNumber = cardNumber
  }

  validateLength() {
    const cardNumberLength = this.cardNumber.length
    for (const length of this.creditCard.getValidLengths()) {
      if (isNaN(length)) {
        if (this.validateLengthRange(cardNumberLength, length)) {
          return true
        }
        continue
      }
      if (cardNumberLength === length) {
        return true
      }
    }
    return false
  }

  validateLengthRange(cardNumberLength, length) {
    const [min, max] = length.split('-').map(x => +x)
    return cardNumberLength >= min && cardNumberLength <= max
  }

  validateINNRanges() {
    if (this.creditCard.getValidInnRanges().length === 0) {
      return true
    }
    for (const innRange of this.creditCard.getValidInnRanges()) {
      if (isNaN(innRange)) {
        if (this.processRange(innRange)) {
          return true
        }
        continue
      }
      if (this.cardNumber.startsWith(innRange)) {
        return true
      }
    }
    return false
  }

  processRange(numbers) {
    const [min, max] = numbers.split('-').map(x => +x)
    const intNumber = this.cardNumber.substring(0, ("" + min).length)
    return (intNumber >= min && intNumber <= max)
  }

  validate() {
    return (
      this.validateLength()
      && this.validateINNRanges()
    );
  }

  getFranchise() {
    return this.creditCard.getFranchise()
  }
}
