import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

import Logo from '../Logo/Logo';
import './Header.css';

function Header({ dark }) {
  const { loggedIn } = useContext(CurrentUserContext);
  const headerClass = dark ? 'header header_mode_dark' : 'header';
  return (
    <header className={headerClass}>
      <div className='header__container'>
        <div className='header__top-line'>
          <Logo />
          {loggedIn ? <Navigation /> : <NavTab />}
        </div>
      </div>
    </header>
  );
}

export default Header;
