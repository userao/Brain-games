const greatestDivisor = (fisrtNumber, secondNumber) => {
  const biggestNumber = fisrtNumber > secondNumber ? fisrtNumber : secondNumber;
  const smallestNumber = biggestNumber === fisrtNumber ? secondNumber : fisrtNumber;
  let divisor = smallestNumber;
  while (divisor > 1) {
    if (biggestNumber % divisor === 0) {
      if (smallestNumber % divisor === 0) break;
    }
    divisor -= 1;
  }
  return divisor;
};

export default greatestDivisor;
