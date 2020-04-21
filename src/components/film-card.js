import AbstractComponent from "./abstract-component";
import {constants} from "../constants";

const createFilmCardControlItemMarcup = (nameClassModifier, text, isActive) => {
  return `<button class="film-card__controls-item button film-card__controls-item--${nameClassModifier} ${isActive ? constants.FILM_CARD_BUTTON_ACTIVE : constants.EMPTY_SYMBOL}">${text}</button>`;
};

const createFilmCardControlsListMarcup = (...isActive) => {
  return new Array(constants.filmCardControls.length).fill(constants.EMPTY_SYMBOL).map((control, i) => {
    return createFilmCardControlItemMarcup(constants.filmCardControls[i].claccName, constants.filmCardControls[i].buttonText, isActive[i]);
  }).join(constants.EMPTY_SYMBOL);
};

const createFilmCardTemplate = (filmCard) => {
  const {title, rating, year, duration, genre, src, description, comments, isWatchlist, isWatched, isFavorite} = filmCard;
  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${src}" alt="${title}" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments.length} comments</a>
        <form class="film-card__controls">
           ${createFilmCardControlsListMarcup(isWatchlist, isWatched, isFavorite)}
        </form>
    </article>`
  );
};

export default class FilmCard extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }
}
