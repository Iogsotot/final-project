import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import burger from '../../assets/icons/burger.png';
import './header.scss';

const Header: FC = () =>

  // login logic
  (
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
            <Link to='/' className="nav__item">Home</Link>
            <Link to='/myPokemons' className="nav__item">My Collection</Link>
            <a href="#contacts" className="nav__item">Contacts</a>
          </ul>
        </nav>

        <div className="theme-toggle"/>
      </div>
    </header>
  );
export default Header;
