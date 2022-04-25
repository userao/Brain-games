#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';
import generateProgression from '../games/generateProgression.js';

const name = greeter();
const question = 'What number is missing in the progression?';
let winCount = 0;

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
