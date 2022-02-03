exports.CreditCard = class {
  constructor(franchise, validInnRanges, validLengths) {
    this.franchise = franchise
    this.validInnRanges = validInnRanges
    this.validLengths = validLengths
  }

  getFranchise() {
    return this.franchise
  }

  getValidInnRanges() {
    return this.validInnRanges
  }

  getValidLengths() {
    return this.validLengths
  }
}


