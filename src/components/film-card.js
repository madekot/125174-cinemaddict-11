import AbstractSmartComponent from "./abstract-smart-component";
import {constants} from "../constants";

const createFilmCardControlItemMarcup = (nameClassModifier, text, isActive) => {
  return `<button class="film-card__controls-item button film-card__controls-item--${nameClassModifier} ${isActive ? constants.FILM_CARD_BUTTON_ACTIVE_CLASS : constants.EMPTY_SYMBOL}">${text}</button>`;
};

const createFilmCardControlsListMarcup = (...isActive) => {
  return new Array(constants.FILM_CARD_CONTROLS.length).fill(constants.EMPTY_SYMBOL).map((control, i) => {
    return createFilmCardControlItemMarcup(constants.FILM_CARD_CONTROLS[i].claccName, constants.FILM_CARD_CONTROLS[i].buttonText, isActive[i]);
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

export default class FilmCard extends AbstractSmartComponent {
  constructor(card) {
    super();

    this._card = card;
    this._onPosterClick = null;
    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  recoveryListeners() {
    this.setOnPosterClick(this._onPosterClick);
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._card.isWatchlist = !this._card.isWatchlist;

        this.rerender();
      });

    element.querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._card.isWatched = !this._card.isWatched;

        this.rerender();
      });

    element.querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._card.isFavorite = !this._card.isFavorite;

        this.rerender();
      });
  }

  setOnPosterClick(handler) {
    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, handler);
    this._onPosterClick = handler;
  }

  setOnAddWatchlistButtonClick(handler) {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, handler);
  }

  setOnMarkWatchedButtonClick(handler) {
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, handler);
  }

  setOnFavoriteButtonClick(handler) {
    this.getElement().querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, handler);
  }
}
