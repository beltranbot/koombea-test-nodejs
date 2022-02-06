const cardValidator = require("card-validator");

class CreditCardValidator {
  constructor(creditCardNumber) {
    this.creditCardNumber = cardValidator.number(creditCardNumber)
  }

  isValid() {
    return this.creditCardNumber.isValid
  }

  getFranchise() {
    if (this.creditCardNumber.card) {
      return this.creditCardNumber.card.type
    }
    return null
  }
}

module.exports = { CreditCardValidator }