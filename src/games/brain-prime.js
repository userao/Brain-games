import askPlayer from '../index.js';
import { generateRandomNumber } from '../utils.js';
import isPrime from '../is-prime.js';

export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameData = [];
  for (let rounds = 0; rounds <= 3; rounds += 1) {
    const randomNumber = generateRandomNumber(1, 200);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const dataForOneRound = [randomNumber, correctAnswer];
    gameData.push(dataForOneRound);
  }

  askPlayer(question, gameData);
};
