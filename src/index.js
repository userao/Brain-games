import readlineSync from 'readline-sync';
import { greetPlayer } from './utils.js';

export default (question, gameData) => {
  const playerName = greetPlayer();
  const roundsCount = gameData.length;

  // Теперь в файле игры генерируются данные сразу на три раунда,
  // и передаются в движок в виде массива.

  console.log(`${question}`);
  for (let round = 1; round < roundsCount; round += 1) {
    const task = gameData[round][0];
    const correctAnswer = gameData[round][1];
    console.log(`Question: ${task}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(playerAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${playerName}!`);
      break;
    }
    if (round === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
