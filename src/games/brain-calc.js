import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const question = 'What is the result of the expression?';

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
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const firstNumber = generateRandomNumber(1, 20);
    const secondNumber = generateRandomNumber(1, 20);
    const operations = ['+', '*', '-'];
    const sign = operations[generateRandomNumber(0, operations.length - 1)];
    const correctAnswer = calculate(firstNumber, secondNumber, sign).toString();
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    rounds.push([task, correctAnswer]);
  }

  playGame(question, rounds);
};
