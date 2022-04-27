import asker from '../src/index.js';
import { greeter, greatestDivisor, generateRandomNum } from '../src/utils.js';

export default () => {
  const name = greeter();
  const question = 'Find the greatest common divisor of given numbers.';
  let winCount = 0;

  while (winCount < 4) {
    const biggestPossibleNumber = 100;
    const num1 = generateRandomNum(biggestPossibleNumber);
    const num2 = generateRandomNum(biggestPossibleNumber);
    const correctAnswer = greatestDivisor(num1, num2);
    if (asker(question, `${num1} ${num2}`, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
