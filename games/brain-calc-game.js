import asker from '../src/index.js';
import { calculate, greeter, generateRandomNum } from '../src/utils.js';

export default () => {
  const question = 'What is the result of the expression?';
  const name = greeter();
  let winCount = 0;

  while (winCount < 4) {
    const biggestPossibleNumber = 20;
    const firstNumber = generateRandomNum(biggestPossibleNumber);
    const secondNumber = generateRandomNum(biggestPossibleNumber);
    const sign = Math.round(Math.random()) === 1 ? '+' : '*';
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    if (asker(question, task, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
