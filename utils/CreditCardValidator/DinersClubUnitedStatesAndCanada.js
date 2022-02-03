const { CreditCard } = require("./CreditCard")

const VALID_INN_RANGES = [54]
const VALID_LENGTHS = [16]
const FRANCHISE = "Diners Club"

exports.DinersClubUnitedStatesAndCanada = () => {
  return new CreditCard(FRANCHISE, VALID_INN_RANGES, VALID_LENGTHS)
};
