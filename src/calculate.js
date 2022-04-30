const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      console.log(`${sign} is not supported operation type`);
      return 0;
  }
};

export default calculate;
