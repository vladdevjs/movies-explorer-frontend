import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRouteElement from '../../utils/ProtectedRoute';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const [loggedIn] = useState(true);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<ProtectedRouteElement element={Movies} loggedIn={loggedIn} />} />
        <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} />} />
        <Route path='/profile' element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
