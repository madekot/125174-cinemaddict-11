const getRandomIntegerNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomFractionalNumber = (min, max, decimalPlaces = 1) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Number(rand.toFixed(decimalPlaces));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};

const getRandomBoolean = () => {
  return getRandomIntegerNumber(0, 1) === 0;
};

const utils = {
  getRandomBoolean,
  getRandomIntegerNumber,
  getRandomFractionalNumber,
  getRandomArrayItem,
};

export {utils};
