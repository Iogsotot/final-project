import { FC } from 'react';
import './appDescription.scss';

const AppDescription: FC = () => (
  <section className='app-description'>
    <h2 className='title'>How it works?</h2>
    <p className="text">
      If you want to catch a Pokemon, then just select the Pokemon
      you like and click the "Catch" button. Hooray! now it is in your
      Pokemon collection and you can always find it in the "My Collection" tab.
    </p>
    <img src="/imgs/how-it-works.png" alt="" />
  </section>
);

export default AppDescription;
