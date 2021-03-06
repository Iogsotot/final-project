import React, { FC } from 'react';
import './promo.scss';
import { MAX_IMGS_COUNT as maxPokemonsCount } from '../../constants/constants';

const Promo: FC = () => {
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
      <div className="wrapper">
        <h1 className="title">
        Find and collect all pokemons!
        </h1>
        {/* <a href="/auth" className='btn'>Login</a> */}
        <div className="gallery">
          <img src={`./pokemons/${getRandomPokemons()}.png`} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
