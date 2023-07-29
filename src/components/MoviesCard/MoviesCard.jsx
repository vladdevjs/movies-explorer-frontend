import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const convertDuration = (number) => {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  };
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  return (
    <li className='movie-card'>
      <img src={movie.image} className='movie-card__image' alt={movie.name} />
      <div className='movie-card__info'>
        <h2 className='movie-card__title'>{movie.name}</h2>
        {isSavedMoviesPage ? (
          <button type='button' className='button movie-card__delete-button' aria-label='Удалить карточку фильма'></button>
        ) : (
          <button type='button' className={`button movie-card__save-button ${movie.isSaved ? 'movie-card__save-button_active' : ''}`} aria-label='Сохранить карточку фильма'></button>
        )}
        <p className='movie-card__duration'>{convertDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
