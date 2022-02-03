const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = [36]
const VALID_LENGTHS = ['14-19']
const FRANCHISE = "Diners Club"

exports.DinersClubInternational = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
