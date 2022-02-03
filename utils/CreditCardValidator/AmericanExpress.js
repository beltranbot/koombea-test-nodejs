const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = [34, 37]
const VALID_LENGTHS = [15]
const FRANCHISE = "American Express"

exports.AmericanExpress = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
