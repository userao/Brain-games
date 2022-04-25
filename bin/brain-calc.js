#!/usr/bin/env node
import asker from '../src/index.js';
import greeter from '../src/cli.js';
import calculate from '../games/calc.js';

const question = 'What is the result of the expression?';
const name = greeter();
let winCount = 0;

while (winCount < 4) {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);
  const sign = Math.round(Math.random()) === 1 ? '+' : '*';
  const task = `${firstNumber} ${sign} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, sign);
  if (asker(question, task, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
