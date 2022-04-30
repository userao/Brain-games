import readlineSync from 'readline-sync';

const generateRandomNumber = (min = 1, max = 10) => (Math.round(Math.random() * (max - min) + min));

const greetPlayer = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { generateRandomNumber, greetPlayer };
