const createTopRatedFilmCardTemplate = () => {
  const src = `./images/posters/the-man-with-the-golden-arm.jpg`;
  const title = `The Man with the Golden Arm`;
  const rating = 9.0;
  const year = 1955;
  const duration = `1h 59m`;
  const genre = `Drama`;
  const description = `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`;
  const comments = 18;

  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${src}" alt="${title}" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
  );
  // TODO: шаблоны одинаковые, нужно этот удалить и подклчють вместо него film-Card;
};

export {createTopRatedFilmCardTemplate};
