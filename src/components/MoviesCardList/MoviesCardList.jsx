import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Импортируем хук useLocation

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ dummyData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const isOnMoviesPage = location.pathname === '/movies';

  return (
    <section className='movies' aria-label='Карточки фильмов'>
      <div className='movies__container'>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className='movies__list'>
              {dummyData.map((movie, index) => (
                <MoviesCard key={index} movie={movie} />
              ))}
            </ul>
            {isOnMoviesPage && (
              <button className='button movies__button-more' arial-label='Подгрузить ещё фильмы'>
                Ещё
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
