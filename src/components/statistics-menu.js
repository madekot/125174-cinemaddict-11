const collectStatisticsFilm = (arr) => {
  const CounterStatistic = {
    favorite: 0,
    watched: 0,
    watchlist: 0
  };
  for (const card of arr) {
    if (card.isFavorite) {
      CounterStatistic.favorite++;
    }
    if (card.isWatched) {
      CounterStatistic.watched++;
    }
    if (card.isWatchlist) {
      CounterStatistic.watchlist++;
    }
  }
  return CounterStatistic;
};

const createStatisticsMenuTemplate = (filmCards) => {
  const {watchlist, watched: history, favorite} = collectStatisticsFilm(filmCards);
  return (
    `<nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
          <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
          <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export {createStatisticsMenuTemplate, collectStatisticsFilm};
