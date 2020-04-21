import AbstractComponent from "./abstract-component";

const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class SortingMenu extends AbstractComponent {
  getTemplate() {
    return createShowMoreButtonTemplate();
  }
}
