import askPlayer from '../index.js';
import { generateRandomNumber } from '../utils.js';
import isEven from '../is-even.js';

export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameData = [];
  for (let rounds = 0; rounds <= 3; rounds += 1) {
    const randomNumber = generateRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const dataForOneRound = [randomNumber, correctAnswer];
    gameData.push(dataForOneRound);
  }

  askPlayer(question, gameData);
};
