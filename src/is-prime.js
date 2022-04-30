const isPrime = (num) => {
  const limitOfDivisors = Math.round(Math.sqrt(num));
  for (let i = limitOfDivisors; i > 1; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default isPrime;
