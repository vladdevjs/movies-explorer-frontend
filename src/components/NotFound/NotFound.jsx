import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigate.length >= 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <main className='notFound'>
      <h1 className='notFound__heading'>404</h1>
      <p className='notFound__message'>Страница не найдена</p>
      <button className='button notFound__button' onClick={handleGoBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
