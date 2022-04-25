#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';

const name = greeter();
const question = 'What number is missing in the progression?';
let winCount = 0;

const generateProgression = () => {
  const progressionLength = Math.round(Math.random() * (10 - 5) + 5);
  const progressionStep = Math.round(Math.random() * (20 - 2) + 2);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progression[i] = Math.round(Math.random() * (10 - 1) + 1);
    progression[i + 1] = progression[i] + progressionStep;
  }

  return progression;
};

while (winCount < 4) {
  const solvableProgression = generateProgression();
  const hiddenPosition = Math.round(Math.random() * solvableProgression.length);
  const correctAnswer = solvableProgression[hiddenPosition];
  solvableProgression[hiddenPosition] = '..';
  const task = solvableProgression.join(' ');
  if (asker(question, task, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
