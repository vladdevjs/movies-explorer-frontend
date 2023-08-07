import { SCREEN_SIZE_MAP } from './constants';

import { SHORT_FILM_DURATION } from './constants';

const updateFilteredMovies = (movies, query, checked) => {
  let filteredResults = [];

  filteredResults = movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase()),
  );
  if (checked) {
    filteredResults = filteredResults.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
  }

  return filteredResults;
};

const findScreenSize = (screenWidth) => {
  if (screenWidth >= 1200) {
    return SCREEN_SIZE_MAP.xl;
  } else if (screenWidth >= 900) {
    return SCREEN_SIZE_MAP.lg;
  } else if (screenWidth >= 600) {
    return SCREEN_SIZE_MAP.md;
  } else {
    return SCREEN_SIZE_MAP.sm;
  }
};

const convertDuration = (number) => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  return `${hours}ч ${minutes}м`;
};

export { updateFilteredMovies, findScreenSize, convertDuration };
