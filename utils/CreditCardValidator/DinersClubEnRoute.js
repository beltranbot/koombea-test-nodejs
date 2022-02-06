const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = []
const VALID_LENGTHS = [15]
const FRANCHISE = "diners-club"

exports.DinersClubEnRoute = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
