import Container from '../Container/Сontainer';
import Heading from '../Heading/Heading';
import './AboutMe.css';
import PersonalPhoto from '../../images/personal-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' aria-label='Общая информация о студенте'>
      <Container>
        <Heading noMargin={true}>Студент</Heading>
        <div className='about-me__personal-container'>
          <div className='about-me__personal-info'>
            <h3 className='about-me__personal-name'>Владислав</h3>
            <p className='about-me__personal-occupation'>Фронтенд-разработчик, 35 лет</p>
            <blockquote className='about-me__personal-description'>
              Родился и живу под Волгоградом. Окончил факультет энергообеспечения предприятий в <abbr>МЭИ</abbr>. Веб-разработка привлекала всегда. Первую HTML-страничку сверстал в 2005 году на первом
              курсе. Одно время делал сайты на CMS. В какой-то момент понял, что хочу профессионально развиваться в сфере фронтенд-разработки.
            </blockquote>
            <a className='link about-me__personal-github' href='https://github.com/vladdevjs' target='_blank' rel='noreferrer' arial-label='Перейти на страницу студента в GitHub'>
              Github
            </a>
          </div>
          <img className='about-me__personal-photo' src={PersonalPhoto} alt='Красавчик' />
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
