import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  let burgerImg = '/imgs/icons/burger.png';
  const burgerNav = {
    display: 'none',
  };

  if (isBurgerOpen) {
    burgerImg = '/imgs/icons/close.png';
    burgerNav.display = 'flex';
    console.log(isBurgerOpen);
  }

  // login logic

  return (
    <header>
      <div className="wrapper">
        <Link to='/' className="logo-group">
          <div className="logo__title">POKE</div>
          <div className="logo__subtitle">
              hunt
            <img src='/imgs/logo.png' alt="" className='logo__img' />
          </div>
        </Link>

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
