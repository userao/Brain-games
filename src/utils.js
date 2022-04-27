import readlineSync from 'readline-sync';

const generateRandomNum = (max = 10, min = 1) => (Math.round(Math.random() * (max - min) + min));

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const greeter = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateProgression = () => {
  const maximumLength = 10;
  const minimumLength = 5;
  const maximumStep = 20;
  const minimumStep = 2;
  const progressionLength = generateRandomNum(maximumLength, minimumLength);
  const progressionStep = generateRandomNum(maximumStep, minimumStep);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progression[i] = generateRandomNum();
    progression[i + 1] = progression[i] + progressionStep;
  }

  return progression;
};

const greatestDivisor = (fisrtNumber, secondNumber) => {
  const numbers = [fisrtNumber, secondNumber].sort((a, b) => a - b);
  const smallestNumber = numbers[0];
  const biggestNumber = numbers[1];
  let divisor = smallestNumber;
  while (divisor > 1) {
    if (biggestNumber % divisor === 0) {
      if (smallestNumber % divisor === 0) break;
    }
    divisor -= 1;
  }
  return divisor;
};

const isEven = (num) => (num % 2 === 0 ? 1 : 0);

const isPrime = (num) => {
  const limitOfDivisors = Math.round(Math.sqrt(num)) + 1;
  for (let i = limitOfDivisors; i > 1; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export {
  calculate, greeter, generateProgression,
  greatestDivisor, isEven, isPrime, generateRandomNum,
};
