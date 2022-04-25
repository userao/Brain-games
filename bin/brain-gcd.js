#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';
import greatestDivisor from '../games/greatestDivisor.js';

const name = greeter();
const question = 'Find the greatest common divisor of given numbers.';
let winCount = 0;

while (winCount < 4) {
  const num1 = Math.floor(Math.random() * 99 + 1);
  const num2 = Math.floor(Math.random() * 99 + 1);
  const correctAnswer = greatestDivisor(num1, num2);
  if (asker(question, `${num1} ${num2}`, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
