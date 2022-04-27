const generateProgression = () => {
  const progressionLength = Math.round(Math.random() * (10 - 5) + 5);
  const progressionStep = Math.round(Math.random() * (20 - 2) + 2);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progression[i] = Math.round(Math.random() * (10 - 1) + 1);
    progression[i + 1] = progression[i] + progressionStep;
  }

  return progression;
};

export default generateProgression;
