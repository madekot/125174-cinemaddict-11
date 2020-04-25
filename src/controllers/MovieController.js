import {remove, render} from "../utils/render";
import FilmCardComponent from "../components/film-card";
import FilmDetailsComponent from "../components/film-details";

export default class MovieController {
  constructor(container) {
    this._container = container;

    this._filmCardComponent = null;
    this._filmDetailsComponent = null;
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(card) {
    this._filmCardComponent = new FilmCardComponent(card);
    this._filmDetailsComponent = new FilmDetailsComponent(card);

    this._filmCardComponent.setOnClick((evt) => {
      evt.preventDefault();
      render(document.body, this._filmDetailsComponent);
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._filmDetailsComponent.setOnButtonCloseClick((evt) => {
      evt.preventDefault();
      remove(this._filmDetailsComponent);
    });

    render(this._container, this._filmCardComponent);
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      remove(this._filmDetailsComponent);
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
