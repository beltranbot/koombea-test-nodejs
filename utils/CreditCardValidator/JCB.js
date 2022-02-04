const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = ['3528-3589']
const VALID_LENGTHS = ['16-19']
const FRANCHISE = "JCB"

exports.JCB = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
