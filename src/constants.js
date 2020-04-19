const CARD_COUNT = 25;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const EMPTY_SYMBOL = ``;
const SPACE_SYMBOL = ` `;
const COMMA_SYMBOL = `,`;
const S_SYMBOL = `s`;
const CHECKED = `checked`;

const FILM_CARD_BUTTON_ACTIVE = `film-card__controls-item--active`;
const SORT_BUTTON_ACTIVE = `sort__button--active`;

const SORT_ITEM_DEFAULT_ACTIVE = 0;
const sortItems = [`Sort by default`, `Sort by date`, `Sort by rating`];

const filmCardControls = [
  {
    name: `watchlist`,
    claccName: `add-to-watchlist`,
    buttonText: `Add to watchlist`,
    labelText: `Add to watchlist`,
  },
  {
    name: `watched`,
    claccName: `mark-as-watched`,
    buttonText: `Mark as watched`,
    labelText: `Already watched`,
  },
  {
    name: `favorite`,
    claccName: `favorite`,
    buttonText: `Mark as favorite`,
    labelText: `Add to favorites`,
  },
];

const emojiNames = [`angry`, `puke`, `sleeping`, `smile`];

const months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const EMOJI_PATH = `./images/emoji/`;
const EMOJI_EXTENSION_FILE = `.png`;

const POSTER_PATH = `./images/posters/`;

const constants = {
  emojiNames,
  months,
  sortItems,
  filmCardControls,
  EMPTY_SYMBOL,
  SPACE_SYMBOL,
  COMMA_SYMBOL,
  S_SYMBOL,
  CHECKED,
  FILM_CARD_BUTTON_ACTIVE,
  SORT_BUTTON_ACTIVE,
  SORT_ITEM_DEFAULT_ACTIVE,
  EMOJI_PATH,
  EMOJI_EXTENSION_FILE,
  POSTER_PATH,
  CARD_COUNT,
  SHOWING_CARDS_COUNT_ON_START,
  SHOWING_CARDS_COUNT_BY_BUTTON,
};

export {constants};
