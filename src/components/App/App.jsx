import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AuthElement, ProtectedRouteElement } from '../../utils/ProtectedRoute';
import { useApiErrorHandling } from '../../utils/useApiErrorHandling';
import { useInfoMessageHandling } from '../../utils/useInfoMessageHandling';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';

import { EDIT_PROFILE_SUCCESS_MESSAGE } from '../../utils/constants';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import InfoPopup from '../InfoPopup/InfoPopup';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorAuthMessage, setErrorAuthMessage] = useState('');
  const [errorApiMessage, showApiError] = useApiErrorHandling();
  const [infoMessage, showInfoMessage] = useInfoMessageHandling();
  const navigate = useNavigate();

  useEffect(() => {
    auth
      .checkToken()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, []);

  const handleSuccessAuthAction = (user, resetForm) => {
    setErrorAuthMessage('');
    resetForm();
    setLoggedIn(true);
    setCurrentUser(user);
    navigate('/movies', { replace: true });
  };

  function handleSignUp(name, email, password, resetForm) {
    setIsLoading(true);
    auth
      .signup(name, email, password)
      .then((user) => {
        handleSuccessAuthAction(user, resetForm);
      })
      .catch((err) => {
        setErrorAuthMessage(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignIn(email, password, resetForm) {
    setIsLoading(true);
    auth
      .signin(email, password)
      .then((user) => {
        handleSuccessAuthAction(user, resetForm);
      })
      .catch((err) => {
        setErrorAuthMessage(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    setIsLoading(true);
    auth
      .signout()
      .catch((error) => showApiError(error))
      .finally(() => setIsLoading(false));
    localStorage.clear();
    setLoggedIn(false);
  }

  function handleChangeUserInfo(newUserInfo) {
    setIsLoading(true);
    mainApi
      .changeUserInfo(newUserInfo)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        console.log('успешно');
        showInfoMessage(EDIT_PROFILE_SUCCESS_MESSAGE);
      })
      .catch((err) => {
        setErrorAuthMessage(err);
      })
      .finally(() => setIsLoading(false));
  }

  const handleDeleteButtonClick = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then(() => {})
      .catch((error) => {
        showApiError(error);
      });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, loggedIn, isLoading, setIsLoading }}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/signup'
            element={
              <AuthElement
                element={Register}
                onSignUp={handleSignUp}
                errorMessage={errorAuthMessage}
                setErrorAuthMessage={setErrorAuthMessage}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <AuthElement
                element={Login}
                onSignIn={handleSignIn}
                errorMessage={errorAuthMessage}
                setErrorAuthMessage={setErrorAuthMessage}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRouteElement element={Movies} showError={showApiError} onDelete={handleDeleteButtonClick} />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                showError={showApiError}
                onDelete={handleDeleteButtonClick}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                onSignOut={handleSignOut}
                onChangeUserInfo={handleChangeUserInfo}
                errorMessage={errorAuthMessage}
                setErrorAuthMessage={setErrorAuthMessage}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ErrorPopup errorMessage={errorApiMessage} />
        <InfoPopup infoMessage={infoMessage} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
