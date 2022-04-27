import generateRandomNum from './random-number-generator.js';

const generateProgression = () => {
  const maximumLength = 10;
  const minimumLength = 5;
  const maximumStep = 20;
  const minimumStep = 2;
  const progressionLength = generateRandomNum(maximumLength, minimumLength);
  const progressionStep = generateRandomNum(maximumStep, minimumStep);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progression[i] = generateRandomNum();
    progression[i + 1] = progression[i] + progressionStep;
  }

  return progression;
};

export default generateProgression;
