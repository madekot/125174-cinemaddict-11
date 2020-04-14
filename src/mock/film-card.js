import {utils} from "../utils";
import {constant} from "../constant.js";

const titles = [`Dracula`, `Evil Dead`, `Carrie`, ` King Kong`, `Re-Animator`, `Halloween`, `Alien`, `Black Christmas`];
const genres = [`Western`, `Gangster`, `Detective`, `Drama`, `Historical`, `Comedy`, `Melodrama`];
const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];
const comments = descriptions.slice();
const posterPaths = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
];
const directors = [`Martin Scorsese`, `Peter Jackson`, `Tim Burton`, `David Fincher`, `Christopher Nolan`, `Milos Forman`];
const writers = [`Sally Rooney`, `Guy Gunaratne`, `David Chariandy`, `Jessie Greengrass`, `Eley Williams`];
const authors = writers.slice();
const actors = writers.slice();

const getRandomArr = (arr, cound) => {
  return new Array(cound).fill(``).map(() => utils.getRandomArrayItem(arr));
};

const generateCommentCard = () => {
  return {
    emojiName: utils.getRandomArrayItem(constant.emojiNames),
    commentText: utils.getRandomArrayItem(comments),
    commentAuthor: utils.getRandomArrayItem(authors),
    commentDay: `2019/12/31 23:59`,
  };
};

const generateCommentListCard = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateCommentCard());
  }
  return result;
};

const generateFilmCard = () => {
  const Year = {
    MIN: 1960,
    MAX: 1980,
  };

  const RatingRange = {
    MIN: 3,
    MAX: 7,
  };

  const Age = {
    MIN: 8,
    MAX: 18,
  };

  const OfferRangeCounter = {
    MIN: 1,
    MAX: 5
  };

  const CommentRangeCounter = {
    MIN: 0,
    MAX: 5
  };

  const counterRange = {
    MIN: 1,
    MAX: 5
  };

  const randomOfferCounter = utils.getRandomIntegerNumber(OfferRangeCounter.MIN, OfferRangeCounter.MAX);
  const randomQuantity = utils.getRandomIntegerNumber(counterRange.MIN, counterRange.MAX);
  const randomCounterComment = utils.getRandomIntegerNumber(CommentRangeCounter.MIN, CommentRangeCounter.MAX);
  const randomData = utils.getRandomData();
  const movieLength =  utils.getRandomMovieLength();
  return {
    comments: generateCommentListCard(randomCounterComment),
    description: getRandomArr(descriptions, randomOfferCounter).join(` `),
    duration: movieLength,
    genre: getRandomArr(genres, randomQuantity).join(` `),
    isFavorite: utils.getRandomBoolean(),
    isWatched: utils.getRandomBoolean(),
    isWatchlist: utils.getRandomBoolean(),
    rating: utils.getRandomFractionalNumber(RatingRange.MIN, RatingRange.MAX),
    src: utils.getRandomArrayItem(posterPaths),
    title: utils.getRandomArrayItem(titles),
    year: randomData.getFullYear(),
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
        value: utils.castTimeFormat(randomData),
      },
      {
        name: `Runtime`,
        value: movieLength,
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
  return new Array(count).fill(``).map(generateFilmCard);
};

export {generateFilmCards};
