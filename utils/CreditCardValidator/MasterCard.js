const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = ['2221-2720', '51-55']
const VALID_LENGTHS = [16]
const FRANCHISE = "mastercard"

exports.MasterCard = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
