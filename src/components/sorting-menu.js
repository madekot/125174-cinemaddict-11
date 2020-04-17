import {utils} from "../utils";
import {constant} from "../constant.js";

const SORT_ITEM_DEFAULT_ACTIVE = 0;
const sortItems = [`Sort by default`, `Sort by date`, `Sort by rating`];

const createSortItem = (text, isActive) => {
  return (`
    <li><a href="#" class="sort__button ${isActive ? `sort__button--active` : constant.EMPTY}">${text}</a></li>
  `);
};

const createSortingMenuTemplate = () => {
  return (
    `<ul class="sort">
      ${sortItems.map((sort, i) => createSortItem(sort, i === SORT_ITEM_DEFAULT_ACTIVE)).join(constant.EMPTY)}
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
