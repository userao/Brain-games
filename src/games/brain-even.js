import askPlayer from '../index.js';
import { greetPlayer, generateRandomNumber } from '../utils.js';
import isEven from '../is-even.js';

export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greetPlayer();
  let winCount = 0;

  while (winCount < 4) {
    const randomNum = generateRandomNumber(1, 100);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (askPlayer(question, randomNum, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
