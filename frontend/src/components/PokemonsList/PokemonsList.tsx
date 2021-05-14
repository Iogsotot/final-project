/* eslint-disable arrow-body-style */
import { FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  fetchMorePokemons, fetchPokemons } from '../../redux/action-creactors/pokemonsAction';
// import fetchPokemons from '../../redux/action-creactors/pokemonsAction';
// import { useAction } from '../../hooks/useAction';
import PokemonCard from '../PokemonCard';
import Spinner from '../Spinner/Spinner';
import EmptyPage from './EmptyPage';
import './pokemonsList.scss';

const PokemonsList: FC<{ filter?: boolean | string }> = ({ filter }) => {
  const { pokemons, loading } = useTypedSelector(store => store.pokemonList);
  const dispatch = useDispatch();

  const filteredPokemons = useMemo(() => {
    if (pokemons && pokemons.length) {
      const newPokemons = [...pokemons];
      return newPokemons;
    }
    return [];
  }, [pokemons]);

  if (!pokemons || filteredPokemons.length === 0) {
    return (
      !loading ?
        <div className='pokemons'>
          <EmptyPage />
          <button onClick={() => dispatch(fetchPokemons())}>Добавить покемонов</button>
        </div>
        :
        (<div className='pokemons'>
          <Spinner />
        </div>)
    );
  }

  return (
    <section className='pokemons-list'>
      <div className="wrapper">
        <h2 className="title">Pokemons</h2>
        <div className="cards-list">
          {!loading ? (pokemons.map(
            pokemon => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ),
          )) : (<Spinner />)
          }
        </div>

        <button onClick={() => dispatch(fetchMorePokemons())} className='btn btn--more'>Load more</button>
      </div>
    </section>
  );
};

export default PokemonsList;
