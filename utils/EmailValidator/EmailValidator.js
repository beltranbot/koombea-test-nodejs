const emailValidator = require('email-validator')

class EmailValidator {

  constructor(email, emails = {}) {
    this.email = email
    this.emails = emails
  }

  isValid() {
    return emailValidator.validate(this.email)
      && !(this.email in this.emails)
  }

  getEmail() {
    return this.email
  }
}

module.exports = { EmailValidator }
