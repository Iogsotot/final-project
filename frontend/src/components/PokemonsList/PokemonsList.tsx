import { FC, useEffect } from 'react';
import { useAction } from '../../hooks/useAction';

const PokemonsList: FC = () => {
  const { fetchUserPokemons } = useAction();

  useEffect(() => {
    const userId = 0;
    fetchUserPokemons({ userId });
  }, []);

  return (
    <section className='pokemons-list'>Pokemons here</section>
  );
};

export default PokemonsList;
