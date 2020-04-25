import {remove, render} from "../utils/render";
import FilmListItemComponent from "../components/films-list";
import {constants} from "../constants";
import ShowMoreButtonComponent from "../components/show-more-button";
import MovieController from "./MovieController";

const renderListCards = (cardsListContainerElement, ListCards) => {
  return ListCards.map((card) => {
    const movieController = new MovieController(cardsListContainerElement);
    movieController.render(card);
    return movieController;
  });
};

// const SortType = {
//   BY_DATE: ``,
//   BY_RATING: ``,
//   DEFAULT: ``,
// };
//
// const getSortedListCards = (ListCards, sortType, from, to) => {
//   let sortedListCards = [];
//   const showingListCards = ListCards.slice();
//   switch (sortType) {
//     case SortType.DATE_UP:
//       sortedListCards = showingListCards.sort((a, b) => a.dueDate - b.dueDate);
//       break;
//     case SortType.DATE_DOWN:
//       sortedListCards = showingListCards.sort((a, b) => b.dueDate - a.dueDate);
//       break;
//     case SortType.DEFAULT:
//       sortedListCards = showingListCards;
//       break;
//   }
//   return sortedListCards.slice(from, to);
// };

export default class PageController {
  constructor(container) {
    this._container = container;

    this._listCards = [];
    this._showedListCardsControllers = [];
    this._filmListItemComponent = new FilmListItemComponent();
    this._showMoreButtonComponent = new ShowMoreButtonComponent();
    this._cardsListContainerElement = this._filmListItemComponent.getElement().querySelector(`.films-list__container`);
    this._showingListCardsCount = constants.SHOWING_CARDS_COUNT_ON_START;
  }

  render(listCards) {
    this._listCards = listCards;

    const newListCards = renderListCards(this._cardsListContainerElement, this._listCards.slice(0, this._showingListCardsCount));
    this._showedListCardsControllers = this._showedListCardsControllers.concat(newListCards);

    render(this._container.getElement(), this._filmListItemComponent);

    if (constants.CARD_COUNT > this._showingListCardsCount) {
      this._renderShowMoreButtonComponent();
    }
  }

  _renderShowMoreButtonComponent() {
    render(this._filmListItemComponent.getElement(), this._showMoreButtonComponent);

    this._showMoreButtonComponent.setOnClick(() => {
      const sortedListCards = this._listCards.slice(this._cardsListContainerElement.children.length, this._cardsListContainerElement.children.length + this._showingListCardsCount); // TODO: тут функция сортировки отдает массив карточек... но пока её нет
      const newListCards = renderListCards(this._cardsListContainerElement, sortedListCards);
      this._showedListCardsControllers = this._showedListCardsControllers.concat(newListCards);
      if (this._cardsListContainerElement.children.length >= this._listCards.length) {
        remove(this._showMoreButtonComponent);
      }
    });
  }
}
