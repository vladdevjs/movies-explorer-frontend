import Container from '../Container/Сontainer';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio' aria-label='Список некоторых проектов, выполненных за время обучения'>
      <Container>
        <h2 className='portfolio__heading'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a className='link portfolio__site-link' href='https://vladdevjs.github.io/how-to-learn' target='_blank' rel='noreferrer' arial-label='Перейти на статичный сайт'>
              Статичный сайт
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='link portfolio__site-link' href='https://vladdevjs.github.io/russian-travel' target='blank' rel='noreferrer' arial-label='Перейти на адаптивный сайт'>
              Адаптивный сайт
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='link portfolio__site-link' href='https://vladdevjs.github.io/react-mesto-auth/' target='blank' rel='noreferrer' arial-label='Перейти на одностраничное приложение'>
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Portfolio;
