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

  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const firstNumber = generateRandomNumber(1, 20);
    const secondNumber = generateRandomNumber(1, 20);
    const supportedOperationSigns = ['+', '*', '-'];
    const sign = supportedOperationSigns[generateRandomNumber(0, 2)];
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    rounds.push([task, correctAnswer]);
  }

  playGame(question, rounds, 'number');
};
