import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ movies, searchError, isLoading, noResults, onSave, onDelete }) {
  return (
    <div className='movies__container'>
      {isLoading && <Preloader />}
      {searchError && <p className='movies__search-error'>Нужно ввести ключевое слово 😣</p>}
      {noResults && !searchError && <p className='movies__not-found'>Ничего не найдено 🥺</p>}
      {!isLoading && !searchError && !noResults && (
        <ul className='movies__list'>
          {movies.map((movie) => (
            <MoviesCard key={movie.id || movie.movieId} movie={movie} onSave={onSave} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesCardList;
