import {render} from "./utils/render";
import {utils} from "./utils/utils";
import {constants} from "./constants.js";
import UserMenuComponet from "./components/user-menu.js";
import StatisticsMenuComponent from "./components/statistics-menu.js";
import SortingMenuComponent from "./components/sorting-menu.js";
import FilmCardComponent from "./components/film-card.js";
import FilmDetailsComponent from "./components/film-details.js";
import FilmsComponent from "./components/films.js";
import FilmListItemComponent from "./components/films-list.js";
import ShowMoreButtonComponent from "./components/show-more-button.js";
import {generateFilmCards} from "./mock/film-card.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const filmCards = generateFilmCards(constants.CARD_COUNT);

const addCounterMoviesDatabase = (length) => {
  const statistics = siteFooterElement.querySelector(`.footer__statistics`);
  statistics.textContent = length;
};

const renderCards = (cardListContainerElement, card) => {
  const onClickCard = () => {
    render(document.body, filmDetailsComponent.getElement());
  };

  const onFilmDetailsButtonClose = () => {
    document.body.removeChild(filmDetailsComponent.getElement());
  };

  const cardComponent = new FilmCardComponent(card);
  const cardElement = cardComponent.getElement();

  cardElement.addEventListener(`click`, onClickCard);

  const filmDetailsComponent = new FilmDetailsComponent(card);
  const filmDetailsButtonCloseElement = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
  filmDetailsButtonCloseElement.addEventListener(`click`, onFilmDetailsButtonClose);

  render(cardListContainerElement, cardComponent.getElement());
};

render(siteHeaderElement, new UserMenuComponet(filmCards).getElement());
render(siteMainElement, new StatisticsMenuComponent(filmCards).getElement());
render(siteMainElement, new SortingMenuComponent().getElement());


const renderFilms = (filmsComponent, cards) => {
  const renderFilmCards = (from, to) => {
    cards.slice(from, to).forEach((card) => renderCards(cardListContainerElement, card));
  };

  const filmListItemComponent = new FilmListItemComponent();
  const cardListContainerElement = filmListItemComponent.getElement().querySelector(`.films-list__container`);

  renderFilmCards(0, constants.SHOWING_CARDS_COUNT_ON_START);

  if (constants.CARD_COUNT > constants.SHOWING_CARDS_COUNT_ON_START) {
    const showMoreButtonComponent = new ShowMoreButtonComponent();
    render(filmListItemComponent.getElement(), showMoreButtonComponent.getElement());

    showMoreButtonComponent.getElement().addEventListener(`click`, () => {
      renderFilmCards(cardListContainerElement.children.length, cardListContainerElement.children.length + constants.SHOWING_CARDS_COUNT_BY_BUTTON);
      if (cardListContainerElement.children.length >= cards.length) {
        filmListItemComponent.getElement().removeChild(showMoreButtonComponent.getElement());
        showMoreButtonComponent.removeElement();
      }
    });
  }

  render(filmsComponent.getElement(), filmListItemComponent.getElement());
};

const filmsComponent = new FilmsComponent();
render(siteMainElement, filmsComponent.getElement());
renderFilms(filmsComponent, filmCards);
addCounterMoviesDatabase(filmCards.length);
