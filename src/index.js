import readlineSync from 'readline-sync';

const greetPlayer = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const roundsCount = 3;

export const playGame = (question, gameData) => {
  const playerName = greetPlayer();

  console.log(`${question}`);
  for (let round = 1; round <= roundsCount; round += 1) {
    const [task, correctAnswer] = gameData[round];
    console.log(`Question: ${task}`);
    let playerAnswer = readlineSync.question('Your answer: ');
    if (typeof correctAnswer === 'number') {
      playerAnswer = +playerAnswer;
    }
    if (playerAnswer === correctAnswer) {
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
