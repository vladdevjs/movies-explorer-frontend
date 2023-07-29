import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='filter-checkbox'>
      <input type='checkbox' className='filter-checkbox__input' defaultChecked aria-label='Поиск по короткометражкам' />
      <span className='button filter-checkbox__slider'></span>
      <span className='link filter-checkbox__label'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
