import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unsupported operation type: ${sign}`);
  }
};

export default () => {
  const question = 'What is the result of the expression?';

  const tasksAndAnswers = [];
  for (let pairsCount = 0; pairsCount <= roundsCount; pairsCount += 1) {
    const firstNumber = generateRandomNumber(1, 20);
    const secondNumber = generateRandomNumber(1, 20);
    let sign = generateRandomNumber(0, 2);
    if (!(sign)) {
      sign = '+';
    } else if (sign === 1) {
      sign = '*';
    } else {
      sign = '-';
    }
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    tasksAndAnswers.push([task, correctAnswer]);
  }

  playGame(question, tasksAndAnswers);
};
