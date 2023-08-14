import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';

import { updateFilteredMovies } from '../../utils/utils';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies({ onDelete, showError }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleDelete = (movieId) => {
    onDelete(movieId);
    setSavedMovies((prev) => prev.filter((movie) => movie._id !== movieId));
    setFilteredMovies((prev) => prev.filter((movie) => movie._id !== movieId));
  };

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getAllMovies()
      .then((movies) => {
        setSavedMovies(movies);
        setFilteredMovies(movies);
      })
      .catch((error) => {
        showError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = (check) => {
    setNoResults(false);
    if (!searchQuery && filteredMovies.length === 0) return;
    const filtered = updateFilteredMovies(savedMovies, searchQuery, check);
    return filtered.length > 0 ? setFilteredMovies(filtered) : setNoResults(true);
  };

  const handleShortFilmChange = (check) => {
    setIsShortFilmChecked(check);
    handleFilter(check);
  };

  const handleResetSearchState = () => {
    setFilteredMovies([]);
    setSearchError(false);
  };

  const handleSearch = () => {
    handleResetSearchState();
    if (!searchQuery) {
      setSearchError(true);
      return;
    }
    handleFilter(isShortFilmChecked, searchQuery);
  };

  return (
    <>
      <Header dark={true} />{' '}
      <main className='saved-movies'>
        <SearchForm
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setIsShortFilmChecked={setIsShortFilmChecked}
        >
          <FilterCheckbox onCheckboxChange={handleShortFilmChange} isShortFilmChecked={isShortFilmChecked} />
        </SearchForm>
        <section className='movies' aria-label='Карточки фильмов'>
          <MoviesCardList
            movies={filteredMovies}
            isLoading={isLoading}
            onDelete={handleDelete}
            searchError={searchError}
            noResults={noResults}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
