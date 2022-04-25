import readlineSync from 'readline-sync';

export default (question, task, correctAnswer, playerName, winCount) => {
  if (winCount === 0) console.log(`${question}`);
  if (winCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return true;
  }
  console.log(`Question: ${task}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (String(correctAnswer) === String(playerAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${playerName}`);
  return false;
};
