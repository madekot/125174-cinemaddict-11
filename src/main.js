import {createUserMenuTemplate} from "./components/user-menu.js";
import {createSortingMenuTemplate} from "./components/sorting-menu.js";
import {createStatisticsMenuTemplate} from "./components/statistics-menu.js";
import {createContentSiteTemplate} from "./components/content-site.js";
import {createFilmCardTemplate} from "./components/film-card.js";
import {createShowMoreButtonTemplate} from "./components/show-more-button.js";
import {createPopUpFilmDetailsTemplate} from "./components/pop-up-film.js";
import {generateFilmCards} from "./mock/film-card.js";

const CARD_COUNT = 20;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;


let showingCardsCount = SHOWING_CARDS_COUNT_ON_START;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const filmCards = generateFilmCards(CARD_COUNT);

const render = ({container, template, place = `beforeend`}) => {
  container.insertAdjacentHTML(place, template);
};

const findElement = (parrent, selector) => {
  return parrent.querySelector(selector);
};

const renderFilmCards = (from, to) => {
  const filmCardWrapperElement = siteMainElement.querySelector(`.films-list .films-list__container`);
  filmCards.slice(from, to).forEach((card) => render({container: filmCardWrapperElement, template: createFilmCardTemplate(card)}));
};

const renderShowMoreButton = (cb) => {
  const filmsListElement = siteMainElement.querySelector(`.films-list`);
  render({container: filmsListElement, template: createShowMoreButtonTemplate()});
  cb();
};

const onClickShowMoreButton = () => {
  const prevCardsCount = showingCardsCount;
  showingCardsCount = showingCardsCount + SHOWING_CARDS_COUNT_BY_BUTTON;
  renderFilmCards(prevCardsCount, showingCardsCount);
  if (showingCardsCount >= filmCards.length) {
    const buttonElement = findElement(siteMainElement, `.films-list__show-more`);
    buttonElement.remove();
  }
};

const addListenerShowMoreButton = () => {
  const buttonElement = findElement(siteMainElement, `.films-list__show-more`);
  buttonElement.addEventListener(`click`, onClickShowMoreButton);
};

const hidePopUpFilmDetails = () => {
  const filmDetailsElement = document.querySelector(`.film-details`);
  filmDetailsElement.classList.add(`visually-hidden`);
};

const addCounterMoviesDatabase = (length) => {
  // const CounterRangeDatabase = {
  //   MIN: 20,
  //   MAX: 200,
  // };
  const statistics = siteFooterElement.querySelector(`.footer__statistics`);
  statistics.textContent = length;
};

render({container: siteHeaderElement, template: createUserMenuTemplate(filmCards)});
render({container: siteMainElement, template: createStatisticsMenuTemplate(filmCards)});
render({container: siteMainElement, template: createSortingMenuTemplate()});
render({container: siteMainElement, template: createContentSiteTemplate()});

render({container: document.body, template: createPopUpFilmDetailsTemplate(filmCards[0])});
renderFilmCards(0, SHOWING_CARDS_COUNT_ON_START);
renderShowMoreButton(addListenerShowMoreButton);
addCounterMoviesDatabase(filmCards.length);
// hidePopUpFilmDetails();


