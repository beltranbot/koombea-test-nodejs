exports.CreditCardValidator = (creditCard, cardNumber) => {
  const validateLength = () => {
    const cardNumberLength = cardNumber.length
    for (const length of creditCard.getValidLengths()) {
      if (isNaN(length)) {
        if (validateLengthRange(cardNumberLength, length)) {
          return true
        }
        continue
      }
      if (cardNumberLength === length) {
        return true
      }
    }
    return false
  }

  const validateLengthRange = (cardNumberLength, length) => {
    const [min, max] = length.split('-').map(x => +x)
    return cardNumberLength >= min && cardNumberLength <= max
  }

  const validateINNRanges = () => {
    if (creditCard.getValidInnRanges().length === 0) {
      return true
    }
    for (const innRange of creditCard.getValidInnRanges()) {
      if (isNaN(innRange)) {
        if (processRange(innRange)) {
          return true
        }
        continue
      }
      if (cardNumber.startsWith(innRange)) {
        return true
      }
    }
    return false
  }

  const processRange = (numbers) => {
    const [min, max] = numbers.split('-').map(x => +x)
    const intNumber = cardNumber.substring(0, ("" + min).length)
    return (intNumber >= min && intNumber <= max)
  }

  const validate = () => {
    return (
      validateLength()
      && validateINNRanges()
    );
  }

  return {
    validate
  }
};
