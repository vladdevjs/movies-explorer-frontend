import './AboutProject.css';
import Container from '../Container/Сontainer';
import Heading from '../Heading/Heading';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <Container>
        <Heading>О проекте</Heading>
        <div className='about-project__text-container'>
          <article className='about-project__text-block'>
            <h3 className='about-project__text-heading'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text-message'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className='about-project__text-block'>
            <h3 className='about-project__text-heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text-message'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <ul class='about-project__timeline'>
          <li className='about-project__timeline-one'>1 неделя</li>
          <li className='about-project__timeline-four'>4 недели</li>
          <li className='about-project__timeline-one-caption'>Back-end</li>
          <li className='about-project__timeline-four-caption'>Front-end</li>
        </ul>
      </Container>
    </section>
  );
}

export default AboutProject;
