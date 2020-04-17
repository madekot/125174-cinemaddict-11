import {constant} from "./constant.js";

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const getRandomIntegerNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomFractionalNumber = (min, max, decimalPlaces = 1) => {
  return Number((min + Math.random() * (max + 1 - min)).toFixed(decimalPlaces));
};

const getRandomArrayItem = (array) => {
  return array[getRandomIntegerNumber(0, array.length - 1)];
};

const getRandomBoolean = () => {
  return getRandomIntegerNumber(0, 1) === 0;
};

const getRandomData = () => {
  const YearRange = {
    MIN: 1950,
    MAX: 2020,
  };

  const MonthRange = {
    MIN: 0,
    MAX: 11,
  };

  const DayRange = {
    MIN: 0,
    MAX: 28,
  };

  return new Date(getRandomIntegerNumber(YearRange.MIN, YearRange.MAX), getRandomIntegerNumber(MonthRange.MIN, MonthRange.MAX), getRandomIntegerNumber(DayRange.MIN, DayRange.MAX));
};

const castTimeFormat = (data) => {
  return `${data.getDate()} ${constant.months[data.getMonth()]} ${data.getFullYear()}`;
};

const getRandomMovieLength = () => {
  const hoursRange = {
    MIN: 1,
    MAX: 4,
  };

  const minuteRange = {
    MIN: 0,
    MAX: 60,
  };

  const result = new Date();
  result.setHours(getRandomIntegerNumber(hoursRange.MIN, hoursRange.MAX), getRandomIntegerNumber(minuteRange.MIN, minuteRange.MAX));
  return `${result.getHours()}h ${result.getMinutes()}m`;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


const utils = {
  getRandomBoolean,
  getRandomIntegerNumber,
  getRandomFractionalNumber,
  getRandomArrayItem,
  getRandomData,
  castTimeFormat,
  getRandomMovieLength,
  createElement,
  RenderPosition,
  render,
};

export {utils};
