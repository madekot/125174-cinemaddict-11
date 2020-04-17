import {utils} from "./utils";
import UserMenuComponet from "./components/user-menu.js";
import StatisticsMenuComponent from "./components/statistics-menu.js";
import SortingMenuComponent from "./components/sorting-menu.js";
import FilmCardComponent from "./components/film-card.js";
import FilmDetailsComponent from "./components/pop-up-film.js";
import FilmsComponent from "./components/films.js";
import FilmListItemComponent from "./components/films-list.js";
import ShowMoreButtonComponent from "./components/show-more-button.js";
import {generateFilmCards} from "./mock/film-card.js";

const CARD_COUNT = 20;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const filmCards = generateFilmCards(CARD_COUNT);

const addCounterMoviesDatabase = (length) => {
  const statistics = siteFooterElement.querySelector(`.footer__statistics`);
  statistics.textContent = length;
};

const renderCards = (cardListContainerElement, card) => {
  const onClickCard = () => {
    utils.render(document.body, filmDetails.getElement());
  };

  const onFilmDetailsButtonClose = () => {
    document.body.removeChild(filmDetails.getElement());
  };

  const cardComponent = new FilmCardComponent(card);
  const cardElement = cardComponent.getElement();

  cardElement.addEventListener(`click`, onClickCard);

  const filmDetails = new FilmDetailsComponent(card);
  const filmDetailsButtonClose = filmDetails.getElement().querySelector(`.film-details__close-btn`);
  filmDetailsButtonClose.addEventListener(`click`, onFilmDetailsButtonClose);

  utils.render(cardListContainerElement, cardComponent.getElement());
};

utils.render(siteHeaderElement, new UserMenuComponet(filmCards).getElement());
utils.render(siteMainElement, new StatisticsMenuComponent(filmCards).getElement());
utils.render(siteMainElement, new SortingMenuComponent().getElement());


const renderFilms = (filmsComponent, cards) => {
  const renderFilmCards = (from, to) => {
    cards.slice(from, to).forEach((card) => renderCards(cardListContainerElement, card));
  };

  const filmListItemComponent = new FilmListItemComponent();
  const cardListContainerElement = filmListItemComponent.getElement().querySelector(`.films-list__container`);

  renderFilmCards(0, SHOWING_CARDS_COUNT_ON_START);

  if (CARD_COUNT <= SHOWING_CARDS_COUNT_ON_START) {
    utils.render(filmsComponent.getElement(), filmListItemComponent.getElement());
    return;
  }

  const showMoreButtonComponent = new ShowMoreButtonComponent();
  utils.render(filmListItemComponent.getElement(), showMoreButtonComponent.getElement());

  showMoreButtonComponent.getElement().addEventListener(`click`, () => {
    renderFilmCards(cardListContainerElement.children.length, cardListContainerElement.children.length + SHOWING_CARDS_COUNT_BY_BUTTON);
    if (cardListContainerElement.children.length >= cards.length) {
      filmListItemComponent.getElement().removeChild(showMoreButtonComponent.getElement());
      showMoreButtonComponent.removeElement();
    }
  });

  utils.render(filmsComponent.getElement(), filmListItemComponent.getElement());
};

const filmsComponent = new FilmsComponent();
utils.render(siteMainElement, filmsComponent.getElement());
renderFilms(filmsComponent, filmCards);
addCounterMoviesDatabase(filmCards.length);
