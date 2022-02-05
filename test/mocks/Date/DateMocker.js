const chance = require('chance').Chance()
const moment = require('moment')

const formats = {
  YYYYMMDD: 'YYYYMMDD',
  'YYYY-MM-DD': 'YYYY-MM-DD'
}

class DateMocker {
  getRandomDate(format = null) {
    let year = parseInt(
      chance.year({
        min: 1990,
        max: (new Date).getFullYear() - 18
      })
    )
    let date = moment(chance.date({string: true, year}), 'MM/DD/YYYY')
    return this.applyFormat(date, format)
  }

  applyFormat(date, format) {
    if (format in formats) {
      return date.format(formats[format])
    }
    let key = chance.integer({min: 0, max: Object.keys(formats).length - 1})
    return date.format(Object.keys(formats)[key])
  }

  getInvalidDate() {
    return moment(chance.date({string: true}), 'MM/DD/YYYY').format('MM/DD/YYYY')
  }
}

module.exports = { DateMocker }
