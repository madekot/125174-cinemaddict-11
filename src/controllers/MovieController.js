import {render} from "../utils/render";
import FilmCardComponent from "../components/film-card";
import FilmDetailsComponent from "../components/film-details";

export default class MovieController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChange = onDataChange;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;
  }

  render(card) {
    this._filmCardComponent = new FilmCardComponent(card);
    this._filmDetailsComponent = new FilmDetailsComponent(card);

    this._filmCardComponent.setOnPosterClick((evt) => {
      evt.preventDefault();
      render(document.body, this._filmDetailsComponent);
    });

    this._filmCardComponent.setOnAddWatchlistButtonClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isWatchlist: !card.isWatchlist,
      }));
    });

    this._filmCardComponent.setOnMarkWatchedButtonClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isWatched: !card.isWatched,
      }));
    });

    this._filmCardComponent.setOnFavoriteButtonClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isFavorite: !card.isFavorite,
      }));
    });

    this._filmDetailsComponent.setOnButtonCloseClick(() => {
      this._filmDetailsComponent.getElement().remove();
    });

    this._filmDetailsComponent.setOnAddWatchlistClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isWatchlist: !card.isWatchlist,
      }));
    });

    this._filmDetailsComponent.setOnMarkWatchedClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isWatched: !card.isWatched,
      }));
    });

    this._filmDetailsComponent.setOnFavoriteClick((evt) => {
      evt.preventDefault();
      this._onDataChange(this, card, Object.assign({}, card, {
        isFavorite: !card.isFavorite,
      }));
    });


    render(this._container, this._filmCardComponent);
  }
}
