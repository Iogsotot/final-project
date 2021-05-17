import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer: FC = () => (
  <footer id='contacts'>
    <div className="wrapper">
      <div className="nav-group">
        <Link to='/' className="logo-group">
          <div className="logo__title">POKE</div>
          <div className="logo__subtitle">
              hunt
            <img src='/imgs/logo.png' alt="" className='logo__img'/>
          </div>
        </Link>

        <nav>
          <ul className='footer__nav'>
            <Link to='/' className="nav__item">Home</Link>
            <Link to='/myPokemons' className="nav__item">My Collection</Link>
          </ul>
        </nav>
      </div>

      <div className="line" />

      <div className="copyright">
        <div className="copyright__design">© Design based on the work of Noora Sagnayeva</div>
        <div className="copyright__developer">© App made by <b>Anna Justus</b></div>
      </div>

    </div>

  </footer>
);

export default Footer;
