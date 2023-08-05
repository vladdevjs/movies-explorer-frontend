import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const { loggedIn } = useContext(CurrentUserContext);
  return loggedIn ? <Component {...props} /> : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
