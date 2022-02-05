const moment = require('moment')

class DateOfBirthValidator {

  constructor(dob) {
      this.dob = dob.trim();
  }

  isValid() {
    return (
      moment(this.dob, 'YYYYMMDD', true).isValid()
      || moment(this.dob, 'YYYY-MM-DD', true).isValid()
    )
  }

  getDOB() {
    return this.dob;
  }
}

module.exports = { DateOfBirthValidator }
