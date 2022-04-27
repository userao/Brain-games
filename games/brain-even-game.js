import asker from '../src/index.js';
import { greeter, generateRandomNum, isEven } from '../src/utils.js';

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
