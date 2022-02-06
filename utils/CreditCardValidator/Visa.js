const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = [4]
const VALID_LENGTHS = [13, 16]
const FRANCHISE = "visa"

exports.Visa = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
