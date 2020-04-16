import {collectStatisticsFilm} from "./statistics-menu.js";
const RatingRange = {
  NOVICE: {
    NAME: `novice`,
    MIN: 1,
    MAX: 10,
  },
  FAN: {
    NAME: `fan`,
    MIN: 11,
    MAX: 20,
  },
  MOVIE_BUFF: {
    NAME: `movie buff`,
    MIN: 20,
  },
};

const getRank = (rating) => {
  const isNovice = rating >= RatingRange.NOVICE.MIN && rating <= RatingRange.NOVICE.MAX ? RatingRange.NOVICE.NAME : ``;
  const isFan = rating >= RatingRange.FAN.MIN && rating <= RatingRange.FAN.MAX ? RatingRange.FAN.NAME : ``;
  const isMovieBuff = rating >= RatingRange.MOVIE_BUFF.MIN ? RatingRange.MOVIE_BUFF.NAME : ``;
  return isNovice || isFan || isMovieBuff;
};

const createUserMenuTemplate = (filmCards) => {
  const {watched: rating} = collectStatisticsFilm(filmCards);
  const rank = getRank(rating);
  const src = `images/bitmap@2x.png`;
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${rank}</p>
      <img class="profile__avatar" src="${src}" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export {createUserMenuTemplate};
