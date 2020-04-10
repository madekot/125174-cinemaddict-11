import {createUserMenuTemplate} from "./components/user-menu.js";
import {createSortingMenuTemplate} from "./components/sorting-menu.js";
import {createStatisticsMenuTemplate} from "./components/statistics-menu.js";
import {createContentSiteTemplate} from "./components/content-site.js";
import {createFilmCardTemplate} from "./components/film-card.js";
import {createShowMoreButtonTemplate} from "./components/show-more-button.js";
import {createTopRatedFilmCardTemplate} from "./components/top-rated-film-card.js";
import {createMostCommentedFilmCardTemplate} from "./components/most-commented-film-card.js";
import {createPopUpFilmDetailsTemplate} from "./components/pop-up-film.js";


const Repeat = {
  FILM_CARD: 5,
  TOP_RATED_FILM_CARD: 2,
  MOST_COMMENTED_FILM_CARD: 2
};


const siteMainElement = document.querySelector(`.main`);


const render = ({container, template, place = `beforeend`}) => {
  container.insertAdjacentHTML(place, template, place);
};

const renderMenuUser = () => {
  const siteHeaderElement = document.querySelector(`.header`);
  return render({container: siteHeaderElement, template: createUserMenuTemplate()});
};

const renderStatisticsMenu = () => {
  return render({container: siteMainElement, template: createStatisticsMenuTemplate()});
};

const renderMenuSorting = () => {
  return render({container: siteMainElement, template: createSortingMenuTemplate()});
};

const siteContentRender = () => {
  render({container: siteMainElement, template: createContentSiteTemplate()});
};

const renderFilmCard = () => {
  const filmCardWrapperElement = siteMainElement.querySelector(`.films-list .films-list__container`);
  return render({container: filmCardWrapperElement, template: createFilmCardTemplate()});
};

const renderList = (cb, count) => {
  for (let i = 0; i < count; i++) {
    cb();
  }
};

const renderShowMoreButton = () => {
  const filmsListElement = siteMainElement.querySelector(`.films-list`);
  return render({container: filmsListElement, template: createShowMoreButtonTemplate()});
};

const renderTopRatedFilmCard = () => {
  const topRatedFilmCardWrapperElement = siteMainElement.querySelector(`.films-list--extra:nth-of-type(2) .films-list__container`);
  return render({container: topRatedFilmCardWrapperElement, template: createTopRatedFilmCardTemplate()});
};

const renderMostCommentedFilmCar = () => {
  const mostCommentedFilmCardWrapperElement = siteMainElement.querySelector(`.films-list--extra:nth-of-type(3) .films-list__container`);
  return render({container: mostCommentedFilmCardWrapperElement, template: createMostCommentedFilmCardTemplate()});
};

const renderPopUpFilmDetails = () => {
  return render({container: document.body, template: createPopUpFilmDetailsTemplate()});
};

const hidePopUpFilmDetails = () => {
  const filmDetailsElement = document.querySelector(`.film-details`);
  filmDetailsElement.classList.add(`visually-hidden`);
};


renderMenuUser();
renderStatisticsMenu();
renderMenuSorting();
siteContentRender();
renderList(renderFilmCard, Repeat.FILM_CARD);
renderShowMoreButton();
renderList(renderTopRatedFilmCard, Repeat.TOP_RATED_FILM_CARD);
renderList(renderMostCommentedFilmCar, Repeat.MOST_COMMENTED_FILM_CARD);
renderPopUpFilmDetails();
hidePopUpFilmDetails();
