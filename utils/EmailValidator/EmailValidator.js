const emailValidator = require('email-validator')

class EmailValidator {

  constructor(email) {
    this.email = email
  }

  isValid() {
    return emailValidator.validate(this.email)
  }

  getEmail() {
    return this.email
  }
}

module.exports = { EmailValidator }
