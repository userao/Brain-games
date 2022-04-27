import asker from '../src/index.js';
import { greeter, isPrime, generateRandomNum } from '../src/utils.js';

export default () => {
  const name = greeter();
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let winCount = 0;

  while (winCount < 4) {
    const biggestPossibleNumber = 200;
    const number = generateRandomNum(biggestPossibleNumber);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (asker(question, number, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
