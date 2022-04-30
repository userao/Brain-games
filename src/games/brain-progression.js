import askPlayer from '../index.js';
import { greetPlayer, generateRandomNumber } from '../utils.js';
import generateProgression from '../generate-progression.js';

export default () => {
  const name = greetPlayer();
  const question = 'What number is missing in the progression?';
  let winCount = 0;

  while (winCount < 4) {
    const solvableProgression = generateProgression();
    const hiddenPosition = generateRandomNumber(0, solvableProgression.length - 1);
    const correctAnswer = solvableProgression[hiddenPosition];
    solvableProgression[hiddenPosition] = '..';
    const task = solvableProgression.join(' ');
    if (askPlayer(question, task, correctAnswer, name, winCount)) {
      winCount += 1;
    } else {
      break;
    }
  }
};
