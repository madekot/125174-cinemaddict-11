import {render} from "./utils/render";
import {constants} from "./constants.js";
import UserMenuComponet from "./components/user-menu.js";
import StatisticsMenuComponent from "./components/statistics-menu.js";
import SortingMenuComponent from "./components/sorting-menu.js";
import FilmsComponent from "./components/films.js";
import {generateMockCards} from "./mock/film-card.js";
import PageController from "./controllers/PageController";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const mockCards = generateMockCards(constants.CARD_COUNT);

const addCounterMoviesDatabase = (length) => {
  const statistics = siteFooterElement.querySelector(`.footer__statistics`);
  statistics.textContent = length;
};

render(siteHeaderElement, new UserMenuComponet(mockCards));
render(siteMainElement, new StatisticsMenuComponent(mockCards));
render(siteMainElement, new SortingMenuComponent());

const filmsComponent = new FilmsComponent();
const pageController = new PageController(filmsComponent);

render(siteMainElement, filmsComponent);
pageController.render(mockCards);

addCounterMoviesDatabase(mockCards.length);
