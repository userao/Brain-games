import { generateRandomNumber } from './utils.js';

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

export default generateProgression;
