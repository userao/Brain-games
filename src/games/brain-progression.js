import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = (length, step, firstNumber) => {
  const progression = [];
  for (let i = 0; i < length - 1; i += 1) {
    if (i === 0) progression[i] = firstNumber;
    progression[i + 1] = progression[i] + step;
  }

  return progression;
};

export default () => {
  const question = 'What number is missing in the progression?';

  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const progressionLength = generateRandomNumber(5, 10);
    const progressionStep = generateRandomNumber(2, 20);
    const firstNumberOfProgression = generateRandomNumber();
    const progression = generateProgression(
      progressionLength,
      progressionStep,
      firstNumberOfProgression,
    );
    const hiddenPosition = generateRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenPosition].toString();
    progression[hiddenPosition] = '..';
    const task = progression.join(' ');
    rounds.push([task, correctAnswer]);
  }

  playGame(question, rounds);
};
