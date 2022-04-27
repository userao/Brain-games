import greeter from '../src/cli.js';
import asker from '../src/index.js';
import generateProgression from '../src/generate-progression.js';
import generateRandomNum from '../src/random-number-generator.js';

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
