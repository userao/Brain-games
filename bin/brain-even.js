#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';
import isEven from '../games/isEven.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const name = greeter();
let winCount = 0;

while (winCount < 4) {
  const randomNum = Math.floor(Math.random() * 99 + 1);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  if (asker(question, randomNum, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
