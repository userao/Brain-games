const generateRandomNum = (max, min = 1) => (Math.round(Math.random() * (max - min) + min));

export default generateRandomNum;
