import {utils} from "../utils";

const offersRangeCounter = {
  MIN: 1,
  MAX: 5
};



const titles = [`Dracula`, `Evil Dead`, `Carrie`, ` King Kong`, `Re-Animator`, `Halloween`, `Alien`, `Black Christmas`];
const genres = [`Western`, `Gangster`, `Detective`, `Drama`, `Historical`, `Comedy`, `Melodrama`];
const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];
const comments = descriptions.slice();
const srcPosters = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const directors = [`Martin Scorsese`, `Peter Jackson`, `Tim Burton`, `David Fincher`, `Christopher Nolan`, `Milos Forman`];
const writers = [`Sally Rooney`, `Guy Gunaratne`, `David Chariandy`, `Jessie Greengrass`, `Eley Williams`];
const authors = writers.slice();
const actors = writers.slice();
const emojiNames = [`angry`, `puke`, `sleeping`, `smile`];

const getRandomArr = (arr, quality) => {
  const offers = [];
  for (let i = 0; i < quality; i++) {
    const randomItem = utils.getRandomArrayItem(arr);
    offers.push(randomItem);
  }
  return offers;
};

// console.log(generateCommentCard());

const generateFilmCard = () => {
  const commentsRangeCounter = {
    MIN: 0,
    MAX: 5
  };

  const Year = {
    MIN: 1960,
    MAX: 1980,
  };

  const Rating = {
    MIN: 3,
    MAX: 7,
  };

  const Age = {
    MIN: 8,
    MAX: 18,
  };

  const commentsCounter = utils.getRandomIntegerNumber(offersRangeCounter.MIN, offersRangeCounter.MAX);
  const offersCounter = utils.getRandomIntegerNumber(commentsRangeCounter.MIN, commentsRangeCounter.MAX);
  const randomQuantity = utils.getRandomIntegerNumber(1, 3);
  return {
    comments: {
      emojiName: utils.getRandomArrayItem(emojiNames),
      commentText: utils.getRandomArrayItem(comments),
      commentAuthor: utils.getRandomArrayItem(authors),
      commentDay: `2019/12/31 23:59`, // TODO:Написать функцию для генерации случайного времени
    },
    commentQuantity: commentsCounter,
    description: getRandomArr(descriptions, offersCounter).join(` `),
    duration: `1h 55m`, // TODO: написать функцию для рандома времени
    genre: getRandomArr(genres, randomQuantity).join(` `),
    isFavorite: utils.getRandomBoolean(),
    isWatched: utils.getRandomBoolean(),
    isWatchlist: utils.getRandomBoolean(),
    rating: utils.getRandomFractionalNumber(Rating.MIN, Rating.MAX),
    src: `./images/posters/${utils.getRandomArrayItem(srcPosters)}`,
    title: utils.getRandomArrayItem(titles),
    year: utils.getRandomIntegerNumber(Year.MIN, Year.MAX),
    originalTitle: utils.getRandomArrayItem(titles),
    age: utils.getRandomIntegerNumber(Age.MIN, Age.MAX),
    moreInfo: [
      {
        name: `Director`,
        value: utils.getRandomArrayItem(directors),
      },
      {
        name: `Writer`,
        value: utils.getRandomArrayItem(directors),
      },
      {
        name: `Actor`,
        value: getRandomArr(actors, randomQuantity).join(`, `),
      },
      {
        name: `Release Date`,
        value: `30 March 1945`,
      },
      {
        name: `Runtime`,
        value: `1h 18m`,
      },
      {
        name: `Country`,
        value: `USA`,
      },
      {
        name: `Genre`,
        value: getRandomArr(genres, randomQuantity),
      },
    ],
  };
};


const generateFilmCards = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateFilmCard());
  }
  return result;
};

export {generateFilmCards};
