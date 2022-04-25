#!/usr/bin/env node
import greeter from '../src/cli.js';
import asker from '../src/index.js';

const name = greeter();
const question = 'Find the greatest common divisor of given numbers.';
let winCount = 0;

const greatestDivisor = (fisrtNumber, secondNumber) => {
  const biggestNumber = fisrtNumber > secondNumber ? fisrtNumber : secondNumber;
  const smallestNumber = biggestNumber === fisrtNumber ? secondNumber : fisrtNumber;
  let divisor = smallestNumber;
  while (divisor > 1) {
    if (biggestNumber % divisor === 0) {
      if (smallestNumber % divisor === 0) break;
    }
    divisor -= 1;
  }
  return divisor;
};

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
