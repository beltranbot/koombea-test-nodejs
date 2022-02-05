const regexes = [
  new RegExp(/^\(\+\d{1,2}\) \d{3}\s\d{3}\s\d{2}\s\d{2}$/),
  new RegExp(/^\(\+\d{1,2}\) \d{3}-\d{3}-\d{2}-\d{2}$/)
]

class PhoneValidator {

  constructor(phone) {
      this.phone = phone.trim()
  }

  isValid() {
    for (const regex of regexes) {
      if (regex.test(this.phone)) {
        return true
      }
    }
    return false
  }

  getPhone() {
    return this.phone;
  }
}

module.exports = { PhoneValidator }
