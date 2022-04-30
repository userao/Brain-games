import askPlayer from '../index.js';
import { greetPlayer, generateRandomNumber } from '../utils.js';
import findGreatestDivisor from '../find-greatest-divisor.js';

export default () => {
  const name = greetPlayer();
  const question = 'Find the greatest common divisor of given numbers.';
  let winCount = 0;

  while (winCount < 4) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const correctAnswer = findGreatestDivisor(num1, num2);
    if (askPlayer(question, `${num1} ${num2}`, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
