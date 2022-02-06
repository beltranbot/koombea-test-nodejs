const { CreditCardValidator}  = require("./CreditCardValidator")

exports.CreditCardSelector = class {

  constructor (creditCardNumber) {
    this.validators = []
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber))
    this.validators.push(new CreditCardValidator(creditCardNumber)) 
  }

  getFranchise() {
    for (const validator of this.validators) {
      if (validator.isValid()) {
        return validator.getFranchise()
      }
    }
    return null
  }

}
