import greeter from '../src/cli.js';
import asker from '../src/index.js';
import isPrime from '../src/is-prime.js';
import generateRandomNum from '../src/random-number-generator.js';

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
