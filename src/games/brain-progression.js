import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionStep = generateRandomNumber(2, 20);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progression[i] = generateRandomNumber();
    progression[i + 1] = progression[i] + progressionStep;
  }

  return progression;
};

export default () => {
  const question = 'What number is missing in the progression?';

  const tasksAndAnswers = [];
  for (let pairsCount = 0; pairsCount <= roundsCount; pairsCount += 1) {
    const solvableProgression = generateProgression();
    const hiddenPosition = generateRandomNumber(0, solvableProgression.length - 1);
    const correctAnswer = solvableProgression[hiddenPosition];
    solvableProgression[hiddenPosition] = '..';
    const task = solvableProgression.join(' ');
    tasksAndAnswers.push([task, correctAnswer]);
  }

  playGame(question, tasksAndAnswers);
};
