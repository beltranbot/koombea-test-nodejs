const { AmericanExpress } = require("./AmericanExpress")
const { CreditCardValidator}  = require("./CreditCardValidator")
const { DinersClubEnRoute } = require("./DinersClubEnRoute")
const { DinersClubInternational } = require("./DinersClubInternational")
const { DinersClubUnitedStatesAndCanada } = require("./DinersClubUnitedStatesAndCanada")
const { Discover } = require("./Discover")
const { JCB } = require("./JCB")
const { MasterCard } = require("./MasterCard")
const { Visa } = require("./Visa")

exports.CreditCardSelector = class {

  constructor (creditCardNumber) {
    this.validators = []
    this.validators.push(new CreditCardValidator(AmericanExpress(), creditCardNumber))
    this.validators.push(new CreditCardValidator(Discover(), creditCardNumber))
    this.validators.push(new CreditCardValidator(JCB(), creditCardNumber))
    this.validators.push(new CreditCardValidator(MasterCard(), creditCardNumber))
    this.validators.push(new CreditCardValidator(Visa(), creditCardNumber))
    this.validators.push(new CreditCardValidator(DinersClubInternational(), creditCardNumber))
    this.validators.push(new CreditCardValidator(DinersClubUnitedStatesAndCanada(), creditCardNumber))
    // DinersClubEnRoute should always be last
    this.validators.push(new CreditCardValidator(DinersClubEnRoute(), creditCardNumber)) 
  }

  getFranchise() {
    for (const validator of this.validators) {
      if (validator.validate()) {
        return validator.getFranchise()
      }
    }
    return null
  }

}
