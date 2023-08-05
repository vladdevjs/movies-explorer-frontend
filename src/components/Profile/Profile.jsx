import { useState, useEffect, useContext } from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { DATA_NOT_CHANGED_ERROR } from '../../utils/constants';

import Header from '../Header/Header';

import './Profile.css';

function Profile({ onSignOut, onChangeUserInfo, errorMessage, setErrorAuthMessage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const { currentUser, isLoading } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser]);

  useEffect(() => {
    if (errorMessage) {
      setIsEditing(true);
    }
  }, [errorMessage]);

  const handleChangeInput = (e) => {
    setErrorAuthMessage('');
    handleChange(e);
  };

  const handleEditClick = () => setIsEditing(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedName = values.name || name;
    const updatedEmail = values.email || email;
    if (updatedName !== currentUser?.name || updatedEmail !== currentUser?.email) {
      onChangeUserInfo({
        name: values.name || name,
        email: values.email || email,
      });
      setIsEditing(false);
    } else {
      setErrorAuthMessage(DATA_NOT_CHANGED_ERROR);
    }
  };

  return (
    <>
      <Header dark={true} />
      <form className='profile' onSubmit={handleSubmit}>
        <div className='profile__container'>
          <h1 className='profile__heading'>Привет, {currentUser?.name}</h1>
          <div className='profile__name-row'>
            <label htmlFor='name' className='profile__name-label'>
              Имя
            </label>
            {isEditing ? (
              <div className='profile__field-container'>
                <input
                  type='text'
                  name='name'
                  minLength='2'
                  pattern='^[A-Za-zА-Яа-я\s\-]+$'
                  title='Имя должно содержать только латиницу, кириллицу, пробел или дефис'
                  value={values.name || name}
                  className={`profile__field-name ${errors.name && 'profile__field-name_error'}`}
                  onChange={handleChangeInput}
                />
                <span className='profile__error-message'>{errors.name}</span>
              </div>
            ) : (
              <span className='profile__name-value'>{name}</span>
            )}
          </div>
          <div className='profile__email-row'>
            <label htmlFor='email' className='profile__email-label'>
              E-mail
            </label>
            {isEditing ? (
              <div className='profile__field-container'>
                <input
                  type='email'
                  name='email'
                  value={values.email || email}
                  className={`profile__field-email ${errors.email && 'profile__field-email_error'}`}
                  onChange={handleChangeInput}
                />
                <span className='profile__error-message'>{errors.email}</span>
              </div>
            ) : (
              <span className='email-value'>{email}</span>
            )}
          </div>

          {isEditing ? (
            <>
              <span className='profile__error'>{errorMessage}</span>
              <button
                type='submit'
                className={`button profile__button${!isValid || errorMessage ? ' profile__button_disabled' : ''}`}
                aria-label='Сохранить данные'
                disabled={!isValid || errorMessage || isLoading}
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <button
                type='button'
                className='button profile__link-edit'
                href='/'
                onClick={handleEditClick}
                aria-label='Редактировать профиль'
              >
                Редактировать
              </button>
              <button
                type='button'
                className='button profile__link-exit'
                href='/signout'
                aria-label='Выйти из аккаунта'
                onClick={onSignOut}
                disabled={isLoading}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}

export default Profile;
