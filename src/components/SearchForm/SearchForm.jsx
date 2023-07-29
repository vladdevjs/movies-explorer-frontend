import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search' aria-label='Поисковая строка'>
      <div className='search__container'>
        <form className='searchForm' autoComplete='off'>
          <input type='text' autoComplete='nope' minLength='2' placeholder='Фильм' className='searchForm__field' />
          <hr className='searchForm-line' />
          <button type='submit' className='button searchForm__button' aria-label='Запустить поиск'></button>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
