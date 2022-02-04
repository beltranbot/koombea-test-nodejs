class DateMocker {
  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getRandomDate(format = null) {
    let date = randomDate(new Date(1950, 0, 1), new Date())
    if (!format) {
      return date
    } else if (format = "%Y%m%d") {
      return date.getYear() + date.getMonth()
    }
  }
}

module.exports = { DateMocker }
