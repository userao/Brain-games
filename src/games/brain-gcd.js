import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

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

export default () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const tasksAndAnswers = [];
  for (let pairsCount = 0; pairsCount <= roundsCount; pairsCount += 1) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
    const task = `${firstNumber} ${secondNumber}`;
    tasksAndAnswers.push([task, correctAnswer]);
  }

  playGame(question, tasksAndAnswers);
};
