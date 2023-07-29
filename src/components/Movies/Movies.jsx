import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import dummyData from '../../dummy/dummyData.json';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header mode='dark' />
      <main>
        <SearchForm />
        <MoviesCardList dummyData={dummyData} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
