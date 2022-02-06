const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = [
  6011, '644-649', 65,
  '622126-622925'
]
const VALID_LENGTHS = ['16-19']
const FRANCHISE = "discover"

exports.Discover = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
