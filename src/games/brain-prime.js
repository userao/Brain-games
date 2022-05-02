import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  const limitOfDivisor = Math.round(Math.sqrt(num));
  for (let i = limitOfDivisor; i > 1; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const tasksAndAnswers = [];
  for (let pairsCount = 0; pairsCount <= roundsCount; pairsCount += 1) {
    const randomNumber = generateRandomNumber(1, 200);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    tasksAndAnswers.push([randomNumber, correctAnswer]);
  }

  playGame(question, tasksAndAnswers);
};
