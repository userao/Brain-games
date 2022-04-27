const generateRandomNum = (max = 10, min = 1) => (Math.round(Math.random() * (max - min) + min));

export default generateRandomNum;
