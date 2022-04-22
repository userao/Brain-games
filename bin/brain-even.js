#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0 ? 1 : 0);

let winCount = 0;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winCount < 3) {
  const randomNum = Math.floor(Math.random() * 99 + 1);
  console.log(`Question: ${randomNum}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNum) === 1 ? 'yes' : 'no';
  if (playerAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log('Correct!');
    winCount += 1;
  } else {
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}`);
    break;
  }
  if (winCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
