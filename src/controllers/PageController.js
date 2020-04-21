import {remove, render} from "../utils/render";
import FilmCardComponent from "../components/film-card";
import FilmDetailsComponent from "../components/film-details";
import FilmListItemComponent from "../components/films-list";
import {constants} from "../constants";
import ShowMoreButtonComponent from "../components/show-more-button";

const renderCards = (cardListContainerElement, card) => {
  const onClickCard = () => {
    render(document.body, filmDetailsComponent);
  };

  const onFilmDetailsButtonClose = () => {
    remove(filmDetailsComponent);
  };

  const filmCardComponent = new FilmCardComponent(card);
  filmCardComponent.setOnClick(onClickCard);

  const filmDetailsComponent = new FilmDetailsComponent(card);
  filmDetailsComponent.setOnButtonCloseClick(onFilmDetailsButtonClose);

  render(cardListContainerElement, filmCardComponent);
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._filmListItemComponent = new FilmListItemComponent();
  }

  render(cards) {
    const container = this._container.getElement();
    const renderFilmCards = (from, to) => {
      cards.slice(from, to).forEach((card) => renderCards(cardListContainerElement, card));
    };

    const cardListContainerElement = this._filmListItemComponent.getElement().querySelector(`.films-list__container`);

    renderFilmCards(0, constants.SHOWING_CARDS_COUNT_ON_START);

    if (constants.CARD_COUNT > constants.SHOWING_CARDS_COUNT_ON_START) {
      const showMoreButtonComponent = new ShowMoreButtonComponent();
      render(this._filmListItemComponent.getElement(), showMoreButtonComponent);

      showMoreButtonComponent.setOnClick(() => {
        renderFilmCards(cardListContainerElement.children.length, cardListContainerElement.children.length + constants.SHOWING_CARDS_COUNT_BY_BUTTON);
        if (cardListContainerElement.children.length >= cards.length) {
          remove(showMoreButtonComponent);
        }
      });
    }

    render(container, this._filmListItemComponent);
  }
}
