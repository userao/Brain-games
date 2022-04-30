import askPlayer from '../index.js';
import { greetPlayer, generateRandomNumber } from '../utils.js';
import calculate from '../calculate.js';

export default () => {
  const question = 'What is the result of the expression?';
  const name = greetPlayer();
  let winCount = 0;

  while (winCount < 4) {
    const firstNumber = generateRandomNumber(1, 20);
    const secondNumber = generateRandomNumber(1, 20);
    const sign = Math.round(Math.random()) === 1 ? '+' : '*';
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    if (askPlayer(question, task, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
