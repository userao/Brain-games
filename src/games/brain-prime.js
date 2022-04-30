import askPlayer from '../index.js';
import { greetPlayer, generateRandomNumber } from '../utils.js';
import isPrime from '../is-prime.js';

export default () => {
  const name = greetPlayer();
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let winCount = 0;

  while (winCount < 4) {
    const number = generateRandomNumber(1, 200);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (askPlayer(question, number, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
