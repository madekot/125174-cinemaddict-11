import AbstractComponent from "./abstract-component";
import {constants} from "../constants.js";

const generateEmojiPath = (emojiName) => {
  return `${constants.EMOJI_PATH}${emojiName}${constants.EMOJI_EXTENSION_FILE}`;
};

const createGenresMarkup = (genres) => {
  return genres.map((genre) => {
    return `<span class="film-details__genre">${genre}</span>`;
  }).join(constants.EMPTY_SYMBOL);
};

const createDetailsRowMarkup = (row) => {
  const {name, value} = row;
  const isOne = value.length === 1;
  const isGenre = name === `Genre`;
  return (`
    <tr class="film-details__row">
      <td class="film-details__term">${isOne && Array.isArray(value) ? name : `${name}${constants.S_SYMBOL}`}</td>
      <td class="film-details__cell">${isGenre && !isOne ? createGenresMarkup(value) : value}</td>
    </tr>    
  `);
};

const createDetailsRowsMarkup = (rows) => {
  return rows.map((row) => createDetailsRowMarkup(row)).join(constants.EMPTY_SYMBOL);
};


const createInfoMarkup = (card) => {
  const {src, age, title, originalTitle, rating, description} = card;

  const rows = card.moreInfo;
  const detailsRowsMarkup = createDetailsRowsMarkup(rows);
  return (`
    <div class="film-details__poster">
      <img class="film-details__poster-img" src="${src}" alt="${title}">

      <p class="film-details__age">${age}+</p>
    </div>

    <div class="film-details__info">
      <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${title}</h3>
          <p class="film-details__title-original">Original: ${originalTitle}</p>
        </div>

        <div class="film-details__rating">
          <p class="film-details__total-rating">${rating}</p>
        </div>
      </div>

      <table class="film-details__table">
        ${detailsRowsMarkup}
      </table>

      <p class="film-details__film-description">
        ${description}  
      </p>
    </div>    
  `);
};

const createFilmDetailsCommentMarkup = (comment) => {
  const {emojiName, commentText, commentAuthor, commentDay} = comment;
  return (`
    <li class="film-details__comment">  
      <span class="film-details__comment-emoji">
        <img src="${generateEmojiPath(emojiName)}" width="55" height="55" alt="emoji-${emojiName}">
      </span>
      <div>
        <p class="film-details__comment-text">${commentText}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${commentAuthor}</span>
          <span class="film-details__comment-day">${commentDay}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>  
    </li>   
  `);
};

const createFilmDetailsCommentListMarkup = (comments) => {
  return comments.map((comment) => {
    return createFilmDetailsCommentMarkup(comment);
  }).join(constants.EMPTY_SYMBOL);
};

const createFilmDetailsEmojiItemMarkup = (emojiName) => {
  return (`
    <input class="film-details__emoji-item visually-hidden" name="comment-${emojiName}" type="radio" id="emoji-${emojiName}" value="${emojiName}">
    <label class="film-details__emoji-label" for="emoji-${emojiName}">
      <img src="${generateEmojiPath(emojiName)}" width="30" height="30" alt="emoji">
    </label>  
  `);
};

const createFilmDetailsEmojiListMarkup = () => {
  return constants.emojiNames.map((name) => createFilmDetailsEmojiItemMarkup(name)).join(constants.EMPTY_SYMBOL);
};

const filmDetailsControlMarkup = (name, text, isActive) => {
  return (`
    <input type="checkbox" class="film-details__control-input visually-hidden" id="${name}" name="${name}" ${isActive ? constants.CHECKED : constants.EMPTY_SYMBOL}> 
    <label for="${name}" class="film-details__control-label film-details__control-label--${name}">${text}</label>    
  `);
};

const filmDetailsControlListMarkup = (...isActive) => {
  return new Array(constants.filmCardControls.length).fill(constants.EMPTY_SYMBOL).map((control, i) => {
    return filmDetailsControlMarkup(constants.filmCardControls[i].name, constants.filmCardControls[i].labelText, isActive[i]);
  }).join(constants.EMPTY_SYMBOL);
};

const createPopUpFilmDetailsTemplate = (filmCard) => {
  const {isWatchlist, isWatched, isFavorite} = filmCard;
  const infoMarkup = createInfoMarkup(filmCard);
  const filmDetailsCommentListMarkup = createFilmDetailsCommentListMarkup(filmCard.comments);
  const filmDetailsEmojiListMarkup = createFilmDetailsEmojiListMarkup();
  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            ${infoMarkup}
          </div>

          <section class="film-details__controls">
            ${filmDetailsControlListMarkup(isWatchlist, isWatched, isFavorite)}
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${ filmCard.comments.length}</span></h3>

            <ul class="film-details__comments-list">
              ${filmDetailsCommentListMarkup}
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                ${filmDetailsEmojiListMarkup}
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

export default class FilmDetails extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createPopUpFilmDetailsTemplate(this._card);
  }

  setOnButtonCloseClick(handler) {
    this.getElement().querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, handler);
  }
}
