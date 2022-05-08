import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (fisrtNumber, secondNumber) => {
  if (fisrtNumber === 0) {
    return secondNumber;
  }
  if (secondNumber === 0) {
    return fisrtNumber;
  }
  const numbers = [fisrtNumber, secondNumber].sort((a, b) => a - b);
  const [smallestNumber, biggestNumber] = numbers;
  let divisor = smallestNumber;
  while (divisor > 1) {
    if (biggestNumber % divisor === 0) {
      if (smallestNumber % divisor === 0) break;
    }
    divisor -= 1;
  }
  return divisor;
};

export default () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
    const task = `${firstNumber} ${secondNumber}`;
    rounds.push([task, correctAnswer]);
  }

  playGame(question, rounds);
};
