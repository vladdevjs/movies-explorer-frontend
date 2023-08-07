import errorImage from '../../images/error.svg';
import './ErrorPopup.css';

const ErrorPopup = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className='error-popup'>
          <img src={errorImage} className='error-popup__image' alt={errorMessage} />
          <p className='error-popup__message'>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default ErrorPopup;
