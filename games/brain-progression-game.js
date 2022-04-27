import asker from '../src/index.js';
import { greeter, generateProgression, generateRandomNum } from '../src/utils.js';

export default () => {
  const name = greeter();
  const question = 'What number is missing in the progression?';
  let winCount = 0;

  while (winCount < 4) {
    const solvableProgression = generateProgression();
    const hiddenPosition = generateRandomNum(solvableProgression.length, 0);
    const correctAnswer = solvableProgression[hiddenPosition];
    solvableProgression[hiddenPosition] = '..';
    const task = solvableProgression.join(' ');
    if (asker(question, task, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
