import askPlayer from '../index.js';
import { generateRandomNumber } from '../utils.js';
import generateProgression from '../generate-progression.js';

export default () => {
  const question = 'What number is missing in the progression?';

  const gameData = [];
  for (let rounds = 0; rounds <= 3; rounds += 1) {
    const solvableProgression = generateProgression();
    const hiddenPosition = generateRandomNumber(0, solvableProgression.length - 1);
    const correctAnswer = solvableProgression[hiddenPosition];
    solvableProgression[hiddenPosition] = '..';
    const task = solvableProgression.join(' ');
    const dataForOneRound = [task, correctAnswer];
    gameData.push(dataForOneRound);
  }

  askPlayer(question, gameData);
};
