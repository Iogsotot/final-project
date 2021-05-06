import { FC } from 'react';
import logo from '../../assets/logo.png';
import burger from '../../assets/icons/burger.png';
import './header.scss';

const Header: FC = () => {
  const any = 1;
  // login logic
  return (
    <header>
      <div className="wrapper">
        <div className="logo-group">
          <div className="logo__title">POKE</div>
          <div className="logo__subtitle">
            hunt
            <img src={logo} alt="" className='logo__img'/>
          </div>
        </div>

        <nav>
          <img src={burger} alt='menu' className="burger" />
          <ul className='header__nav'>
            <li className="nav__item">Home</li>
            <li className="nav__item">My Collection</li>
            <li className="nav__item">Contacts</li>
          </ul>
        </nav>

        <div className="theme-toggle"/>
      </div>
    </header>
  );
};

export default Header;
