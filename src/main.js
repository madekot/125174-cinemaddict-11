import {render, remove} from "./utils/render";
import {constants} from "./constants.js";
import UserMenuComponet from "./components/user-menu.js";
import StatisticsMenuComponent from "./components/statistics-menu.js";
import SortingMenuComponent from "./components/sorting-menu.js";
import FilmCardComponent from "./components/film-card.js";
import FilmDetailsComponent from "./components/film-details.js";
import FilmsComponent from "./components/films.js";
import FilmListItemComponent from "./components/films-list.js";
import ShowMoreButtonComponent from "./components/show-more-button.js";
import {generateMockCards} from "./mock/film-card.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const mockCards = generateMockCards(constants.CARD_COUNT);

const addCounterMoviesDatabase = (length) => {
  const statistics = siteFooterElement.querySelector(`.footer__statistics`);
  statistics.textContent = length;
};

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

render(siteHeaderElement, new UserMenuComponet(mockCards));
render(siteMainElement, new StatisticsMenuComponent(mockCards));
render(siteMainElement, new SortingMenuComponent());


const renderFilms = (filmsComponent, cards) => {
  const renderFilmCards = (from, to) => {
    cards.slice(from, to).forEach((card) => renderCards(cardListContainerElement, card));
  };

  const filmListItemComponent = new FilmListItemComponent();
  const cardListContainerElement = filmListItemComponent.getElement().querySelector(`.films-list__container`);

  renderFilmCards(0, constants.SHOWING_CARDS_COUNT_ON_START);

  if (constants.CARD_COUNT > constants.SHOWING_CARDS_COUNT_ON_START) {
    const showMoreButtonComponent = new ShowMoreButtonComponent();
    render(filmListItemComponent.getElement(), showMoreButtonComponent);

    showMoreButtonComponent.getElement().addEventListener(`click`, () => {
      renderFilmCards(cardListContainerElement.children.length, cardListContainerElement.children.length + constants.SHOWING_CARDS_COUNT_BY_BUTTON);
      if (cardListContainerElement.children.length >= cards.length) {
        remove(showMoreButtonComponent);
      }
    });
  }

  render(filmsComponent.getElement(), filmListItemComponent);
};

const filmsComponent = new FilmsComponent();
render(siteMainElement, filmsComponent);
renderFilms(filmsComponent, mockCards);
addCounterMoviesDatabase(mockCards.length);
