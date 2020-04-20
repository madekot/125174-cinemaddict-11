import {utils} from "../utils";
import {constants} from "../constants.js";

const createSortItem = (text, isActive) => {
  return (`
    <li><a href="#" class="sort__button ${isActive ? constants.SORT_BUTTON_ACTIVE : constants.EMPTY_SYMBOL}">${text}</a></li>
  `);
};

const createSortingMenuTemplate = () => {
  return (
    `<ul class="sort">
      ${constants.sortItems.map((sort, i) => createSortItem(sort, i === constants.SORT_ITEM_DEFAULT_ACTIVE)).join(constants.EMPTY_SYMBOL)}
    </ul>`
  );
};

export default class SortingMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = utils.createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
