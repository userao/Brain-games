import greeter from '../src/cli.js';
import asker from '../src/index.js';
import isEven from '../src/is-even.js';
import generateRandomNum from '../src/random-number-generator.js';

export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeter();
  let winCount = 0;

  while (winCount < 4) {
    const biggestPossibleNumber = 100;
    const randomNum = generateRandomNum(biggestPossibleNumber);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (asker(question, randomNum, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
