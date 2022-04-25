#!/usr/bin/env node
import asker from '../src/index.js';
import greeter from '../src/cli.js';

const name = greeter();
const question = 'What is the result of the expression?';

let winCount = 0;
while (winCount < 4) {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  const sign = Math.round(Math.random()) === 1 ? '+' : '*';
  const task = `${num1} ${sign} ${num2}`;
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  if (asker(question, task, correctAnswer, name, winCount)) {
    winCount += 1;
  } else {
    break;
  }
}
