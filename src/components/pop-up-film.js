const createDetailsRowMarkup = (term, cell) => {
  return (`
    <tr class="film-details__row">
      <td class="film-details__term">${term}</td>
      <td class="film-details__cell">${cell}</td>
    </tr>      
  `);
};

const createInfoMarkup = () => {
  const src = `./images/posters/the-great-flamarion.jpg`;
  const age = 18;
  const title = `The Great Flamarion`;
  const titleOriginal = `The Great Flamarion`;
  const totalRating = 8.9;
  const description = `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`;
  return (`
    <div class="film-details__poster">
      <img class="film-details__poster-img" src="${src}" alt="${title}">

      <p class="film-details__age">${age}+</p>
    </div>

    <div class="film-details__info">
      <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${title}</h3>
          <p class="film-details__title-original">Original: ${titleOriginal}</p>
        </div>

        <div class="film-details__rating">
          <p class="film-details__total-rating">${totalRating}</p>
        </div>
      </div>

      <table class="film-details__table">
        ${createDetailsRowMarkup(`Director`, `Anthony Mann`)}
        ${createDetailsRowMarkup(`Writers`, `Anne Wigton, Heinz Herald, Richard Weil`)}
        ${createDetailsRowMarkup(`Actors`, `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`)}
        ${createDetailsRowMarkup(`Release Date`, `30 March 1945`)}
        ${createDetailsRowMarkup(`Runtime`, `1h 18m`)}
        ${createDetailsRowMarkup(`Country`, `USA`)}
        <tr class="film-details__row">
          <td class="film-details__term">Genres</td>
          <td class="film-details__cell">
            <span class="film-details__genre">Drama</span>
            <span class="film-details__genre">Film-Noir</span>
            <span class="film-details__genre">Mystery</span></td>
        </tr>
      </table>

      <p class="film-details__film-description">
        ${description}  
      </p>
    </div>    
  `);
};

const createFilmDetailsCommentMarkup = () => {
  const srcEmoji = `./images/emoji/smile.png`;
  const emojiName = `smile`;
  const commentText = `Interesting setting and a good cast`;
  const commentAuthor = `Tim Macoveev`;
  const commentDay = `2019/12/31 23:59`;
  return (`
    <span class="film-details__comment-emoji">
      <img src="${srcEmoji}" width="55" height="55" alt="emoji-${emojiName}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${commentAuthor}</span>
        <span class="film-details__comment-day">${commentDay}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>  
  `);
};

const createEmojiListItem = () => {
  const emojiName = `smile`;
  const srcEmoji = `./images/emoji/smile.png`;
  return (`
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emojiName}" value="${emojiName}">
    <label class="film-details__emoji-label" for="emoji-${emojiName}">
      <img src="${srcEmoji}" width="30" height="30" alt="emoji">
    </label>    
  `);
};

const createPopUpFilmDetailsTemplate = () => {
  const commentsCount = 4;
  const infoMarkup = createInfoMarkup();
  const filmDetailsCommentMarkup = createFilmDetailsCommentMarkup();
  const emojiListItem = createEmojiListItem();
  // TODO: Заменить разметку на функцию createFilmDetailsCommentMarkup;
  // TODO: Заменить разметку на функцию createEmojiListItem;
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
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>

            <ul class="film-details__comments-list">
              <li class="film-details__comment">
                ${filmDetailsCommentMarkup}
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
                </span>
                <div>
                  <p class="film-details__comment-text">Booooooooooring</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">2 days ago</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
                </span>
                <div>
                  <p class="film-details__comment-text">Very very old. Meh</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">2 days ago</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
                </span>
                <div>
                  <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">Today</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                ${emojiListItem}

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

export {createPopUpFilmDetailsTemplate};
