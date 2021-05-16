import { FC } from 'react';
import logo from '../../assets/logo.png';
import './footer.scss';

const Footer: FC = () => (
  <footer id='contacts'>
    <div className="wrapper">
      <div className="nav-group">
        <div className="logo-group">
          <div className="logo__title">POKE</div>
          <div className="logo__subtitle">
              hunt
            <img src={logo} alt="" className='logo__img'/>
          </div>
        </div>

        <nav>
          <ul className='footer__nav'>
            <li className="nav__item">Home</li>
            <li className="nav__item">My Collection</li>
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
