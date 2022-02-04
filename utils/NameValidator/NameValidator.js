class NameValidator {

  constructor(name) {
      this.name = name.trim();
  }

  isValid() {
    return !this.name.includes('-')
  }

  getName() {
    return this.name;
  }
}

module.exports = { NameValidator }
