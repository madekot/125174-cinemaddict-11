const createMostCommentedFilmCardTemplate = () => {
  const title = `Santa Claus Conquers the Martians`;
  const rating = 2.3;
  const year = 1964;
  const duration = `1h 21m`;
  const genre = `Comedy`;
  const description = `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`;
  const comments = `465 comments`;
  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="${title}" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments}</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
        </form>
    </article>`
    // TODO: написать логику для добавлнения класса film-card__controls-item--active ;
  );
};

export {createMostCommentedFilmCardTemplate};
