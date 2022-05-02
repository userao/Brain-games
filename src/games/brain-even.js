import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const tasksAndAnswers = [];
  for (let pairsCount = 0; pairsCount <= roundsCount; pairsCount += 1) {
    const randomNumber = generateRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    tasksAndAnswers.push([randomNumber, correctAnswer]);
  }

  playGame(question, tasksAndAnswers);
};
