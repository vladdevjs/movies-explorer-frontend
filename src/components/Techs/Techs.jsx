import Container from '../Container/Сontainer';
import Heading from '../Heading/Heading';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' aria-label='Изученные за время обучения технологии'>
      <Container>
        <Heading>Технологии</Heading>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__message'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul class='techs__list'>
          <li class='techs__list-item'>HTML</li>
          <li class='techs__list-item'>CSS</li>
          <li class='techs__list-item'>JS</li>
          <li class='techs__list-item'>React</li>
          <li class='techs__list-item'>Git</li>
          <li class='techs__list-item'>Express.js</li>
          <li class='techs__list-item'>mongoDB</li>
        </ul>
      </Container>
    </section>
  );
}

export default Techs;
