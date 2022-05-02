const generateRandomNumber = (min = 1, max = 10) => (Math.round(Math.random() * (max - min) + min));

export default generateRandomNumber;
