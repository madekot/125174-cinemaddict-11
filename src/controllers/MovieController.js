import FilmCardComponent from "../components/film-card";
import FilmDetails from "../components/film-details";
import {render, remove} from "../utils/render";

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

export default class TaskController {
  constructor(container) {
  }

  render(card) {
  }
}
