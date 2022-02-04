const moment = requier('moment')

class DateOfBirthValidator {

  constructor(dob) {
      this.dob = dob;
  }

  isValid() {
    return (
      moment(this.dob, '%Y%m%d',true).isValid()
      || moment(this.dob, '%F',true).isValid()
    )
  }

  getName() {
    return this.name;
  }
}

module.exports = { DateOfBirthValidator }
