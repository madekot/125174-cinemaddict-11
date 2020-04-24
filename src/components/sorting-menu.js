import AbstractComponent from "./abstract-component";
import {constants} from "../constants.js";

const createSortItem = (text, isActive) => {
  return (`
    <li><a href="#" class="sort__button ${isActive ? constants.SORT_BUTTON_ACTIVE_CLASS : constants.EMPTY_SYMBOL}">${text}</a></li>
  `);
};

const createSortingMenuTemplate = () => {
  return (
    `<ul class="sort">
      ${constants.SORT_ITEMS.map((sort, i) => createSortItem(sort, i === constants.SORT_ITEM_DEFAULT_ACTIVE)).join(constants.EMPTY_SYMBOL)}
    </ul>`
  );
};

export default class SortingMenu extends AbstractComponent {
  getTemplate() {
    return createSortingMenuTemplate();
  }
}
