import React, { FC, useState } from 'react';
import PokemonsList from '../PokemonsList';

const Gallery: FC = () => {
  const filter = 'mainPage';
  return (
    <PokemonsList filter={false}/>
  );
};

export default Gallery;
