import { FC } from 'react';
import PokemonsList from '../PokemonsList';

const MyPokemons: FC = () => {
  const filter = 'MyPokemons';
  return <PokemonsList filter />;
};

export default MyPokemons;
