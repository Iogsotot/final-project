import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import burger from '../../assets/icons/burger.png';
import close from '../../assets/icons/close.png';
import './header.scss';

const Header: FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let burgerImg = burger;
  const burgerNav = {
    display: 'none',
  };

  if (isBurgerOpen) {
    burgerImg = close;
    burgerNav.display = 'flex';
    console.log(isBurgerOpen);
  }

  // login logic

  return (
    <header>
      <div className="wrapper">
        <div className="logo-group">
          <div className="logo__title">POKE</div>
          <div className="logo__subtitle">
              hunt
            <img src={logo} alt="" className='logo__img' />
          </div>
        </div>

        <nav>
          <div className="burger__nav">
            <img src={burgerImg} alt='menu' className="burger" onClick={() => setIsBurgerOpen((state) => !state)} />
            <ul className='nav__list' style={ burgerNav }>
              <Link to='/' className="nav__item">Home</Link>
              <Link to='/myPokemons' className="nav__item">My Collection</Link>
              <a href="#contacts" className="nav__item">Contacts</a>
            </ul>
          </div>
          <ul className='header__nav'>
            <Link to='/' className="nav__item">Home</Link>
            <Link to='/myPokemons' className="nav__item">My Collection</Link>
            <a href="#contacts" className="nav__item">Contacts</a>
          </ul>
        </nav>

        <div className="theme-toggle" />
      </div>
    </header>
  );
};
export default Header;
