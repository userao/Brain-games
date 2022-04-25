#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';
import isPrime from '../games/isPrime.js';

const name = greeter();
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let winCount = 0;

while (winCount < 4) {
  const number = Math.floor(Math.random() * 200 + 1);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  if (asker(question, number, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
