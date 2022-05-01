import askPlayer from '../index.js';
import { generateRandomNumber } from '../utils.js';
import calculate from '../calculate.js';

export default () => {
  const question = 'What is the result of the expression?';

  const gameData = [];
  for (let rounds = 0; rounds <= 3; rounds += 1) {
    const firstNumber = generateRandomNumber(1, 20);
    const secondNumber = generateRandomNumber(1, 20);
    const sign = Math.round(Math.random()) === 1 ? '+' : '*';
    const task = `${firstNumber} ${sign} ${secondNumber}`;
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    const dataForOneRound = [task, correctAnswer];
    gameData.push(dataForOneRound);
  }

  askPlayer(question, gameData);
};
