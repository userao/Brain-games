const findGreatestDivisor = (fisrtNumber, secondNumber) => {
  const numbers = [fisrtNumber, secondNumber].sort((a, b) => a - b);
  const smallestNumber = numbers[0];
  const biggestNumber = numbers[1];
  let divisor = smallestNumber;
  while (divisor > 1) {
    if (biggestNumber % divisor === 0) {
      if (smallestNumber % divisor === 0) break;
    }
    divisor -= 1;
  }
  return divisor;
};

export default findGreatestDivisor;
