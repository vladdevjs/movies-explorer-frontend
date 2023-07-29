import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import dummyData from '../../dummy/dummyData-saved.json';

function SavedMovies() {
  return (
    <>
      <Header mode={'dark'} />
      <SearchForm />
      <main className='saved-movies'>
        <MoviesCardList dummyData={dummyData} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
