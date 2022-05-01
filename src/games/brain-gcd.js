import askPlayer from '../index.js';
import { generateRandomNumber } from '../utils.js';
import findGreatestDivisor from '../find-greatest-divisor.js';

export default () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const gameData = [];
  for (let rounds = 0; rounds <= 3; rounds += 1) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
    const task = `${firstNumber} ${secondNumber}`;
    const dataForOneRound = [task, correctAnswer];
    gameData.push(dataForOneRound);
  }

  askPlayer(question, gameData);
};
