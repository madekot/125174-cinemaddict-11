import {remove, render} from "../utils/render";
import FilmCardComponent from "../components/film-card";
import FilmDetailsComponent from "../components/film-details";
import FilmListItemComponent from "../components/films-list";
import {constants} from "../constants";
import ShowMoreButtonComponent from "../components/show-more-button";

const renderCard = (cardContainerElement, card) => {

  const onCardClick = () => {
    render(document.body, filmDetailsComponent);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const onFilmDetailsButtonCloseClick = () => {
    remove(filmDetailsComponent);
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      onFilmDetailsButtonCloseClick();
    }
  };

  const filmCardComponent = new FilmCardComponent(card);
  const filmDetailsComponent = new FilmDetailsComponent(card);

  filmCardComponent.setOnClick(onCardClick);
  filmDetailsComponent.setOnButtonCloseClick(onFilmDetailsButtonCloseClick);

  render(cardContainerElement, filmCardComponent);
};

const renderListCards = (cardsListContainerElement, tasks) => {
  tasks.forEach((task) => {
    renderCard(cardsListContainerElement, task);
  });
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._filmListItemComponent = new FilmListItemComponent();
    this._showMoreButtonComponent = new ShowMoreButtonComponent();
  }

  render(listCards) {
    const cardsListContainerElement = this._filmListItemComponent.getElement().querySelector(`.films-list__container`);

    renderListCards(cardsListContainerElement, listCards.slice(0, constants.SHOWING_CARDS_COUNT_ON_START));

    if (constants.CARD_COUNT > constants.SHOWING_CARDS_COUNT_ON_START) {
      render(this._filmListItemComponent.getElement(), this._showMoreButtonComponent);

      this._showMoreButtonComponent.setOnClick(() => {
        let showingTasksCount = cardsListContainerElement.children.length + constants.SHOWING_CARDS_COUNT_BY_BUTTON;
        renderListCards(cardsListContainerElement, listCards.slice(cardsListContainerElement.children.length, showingTasksCount));

        if (cardsListContainerElement.children.length >= listCards.length) {
          remove(this._showMoreButtonComponent);
        }
      });
    }

    render(this._container.getElement(), this._filmListItemComponent);
  }
}
