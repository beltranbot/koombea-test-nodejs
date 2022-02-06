class AddressValidator {

  constructor(address) {
    this.address = address
  }

  getAddress() {
    return this.address
  }

  isValid() {
    return this.address.length > 0
  }
}

module.exports = { AddressValidator }
