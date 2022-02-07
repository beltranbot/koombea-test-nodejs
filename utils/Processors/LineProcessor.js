const { NameValidator } = require('../../utils/NameValidator/NameValidator')
const { DateOfBirthValidator } = require('../../utils/DateOfBirthValidator/DateOfBirthValidator')
const { PhoneValidator } = require('../../utils/PhoneValidator/PhoneValidator')
const { AddressValidator } = require('../../utils/AddressValidator/AddressValidator')
const { CreditCardValidator } = require('../../utils/CreditCardValidator/CreditCardValidator')
const { EmailValidator } = require('../../utils/EmailValidator/EmailValidator')

const classes = {
  NameValidator,
  DateOfBirthValidator,
  PhoneValidator,
  AddressValidator,
  CreditCardValidator,
  EmailValidator,
}

class LineProcessor {
  constructor(line, emails = {}) {
    this.line = line.split(',')
    this.emails = emails
    this.isValid = null
    this.error = ''
    this.validate()
  }

  validate() {
    if (this.isValid !== null){
      return this.isValid
    }

    // get all emails in the database for this user and keep them in an array
    // add new entries to the array
    let i = 0
    this.isValid = true
    for (const className of Object.keys(classes)) {
      let validator = null
      let contact = {}
      if (className === EmailValidator) {
        validator = new classes[className](this.line[i], this.emails)
      } else {
        validator = new classes[className](this.line[i])
      }
      let isValid = validator.isValid()
      if (!isValid) {
        this.error = 'failed at ', className
        this.isValid = false
        break
      }
      this.setData(contact)
      i++
    }
    return this.isValid
  }

  getContactData() {
    return {

    }
  }

}

module.exports = LineProcessor
