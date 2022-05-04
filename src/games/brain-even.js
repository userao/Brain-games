import { playGame, roundsCount } from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const randomNumber = generateRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    rounds.push([randomNumber, correctAnswer]);
  }

  playGame(question, rounds, 'string');
};
