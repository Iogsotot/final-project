import { FC } from 'react';
import './promo.scss';

const Promo: FC = () => {
  const maxPokemonsCount = 720;
  const getRandomPokemons = (variants = 1) => {
    const galleryList = [];
    while (galleryList.length < variants) {
      const randomIndex = Math.floor(Math.random() * maxPokemonsCount);
      if (galleryList.indexOf(randomIndex) === -1) galleryList.push(randomIndex);
    }
    return galleryList;
  };

  return (
    <section className='promo'>
      <h1 className="title">
      Find and collect all pokemons!
      </h1>
      <a href="/auth" className='btn'>Login</a>
      <div className="gallery">
        <img src={`./pokemons/${getRandomPokemons()}.png`} alt="" />
      </div>
    </section>
  );
};

export default Promo;
