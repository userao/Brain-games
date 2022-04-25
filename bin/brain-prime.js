#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';

const name = greeter();
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let winCount = 0;

const isPrime = (num) => {
  for (let i = Math.round(Math.sqrt(num)); i > 1; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};

while (winCount < 4) {
  const number = Math.floor(Math.random() * 200);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  if (asker(question, number, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
