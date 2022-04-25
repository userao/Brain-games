const isPrime = (num) => {
  for (let i = Math.round(Math.sqrt(num)); i > 1; i -= 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default isPrime;
