const createFilmCardTemplate = (filmCard) => {
  const {title, rating, year, duration, genre, src, description, comments, isWatchlist, isWatched, isFavorite} = filmCard;
  const commentQuantity = comments.length;
  const watchlistButtonActiveClass = isWatchlist ? `film-card__controls-item--active` : ``;
  const watchedButtonActiveClass = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteButtonActiveClass = isFavorite ? `film-card__controls-item--active` : ``;
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
        <a class="film-card__comments">${commentQuantity} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistButtonActiveClass}">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedButtonActiveClass}">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteButtonActiveClass}">Mark as favorite</button>
        </form>
    </article>`
  );
};


export {createFilmCardTemplate};
