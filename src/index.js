import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const playGame = (question, gameData) => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(`${question}`);
  for (let round = 1; round <= roundsCount; round += 1) {
    const [task, correctAnswer] = gameData[round];
    console.log(`Question: ${task}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${playerName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
  return 0;
};
