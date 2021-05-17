/* eslint-disable arrow-body-style */
// this rule is disabled to improve the readability of the code
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  fetchMorePokemons,
  fetchPokemons,
} from '../../redux/action-creactors/pokemonsAction';
import { fetchMoreUserPokemons, fetchUserPokemons } from '../../redux/action-creactors/userAction';
import PokemonCard from '../PokemonCard';
import Spinner from '../Spinner/Spinner';
import EmptyPage from './EmptyPage';
import './pokemonsList.scss';
import { Pokemon, UserPokemon } from '../../models';

const PokemonsList: FC<{ filter?: boolean | string }> = ({ filter }) => {
  const { pokemons, loading } = useTypedSelector(store => store.pokemonList);
  const { userPokemons, userId } = useTypedSelector(store => store.userPokemonList);
  const dispatch = useDispatch();

  const getFilteredPokemons = () => {
    if (!filter || filter === 'MainPage') {
      return pokemons;
    }
    return userPokemons;
  };

  useEffect(() => {
    if (!filter || filter === 'MainPage') {
      dispatch(fetchPokemons());
    }
    if (userId) {
      dispatch(fetchUserPokemons());
    }
  }, []);

  const filteredPokemons = getFilteredPokemons();

  if (!pokemons || (filter && filteredPokemons.length === 0)) {
    return (
      !loading ?
        <div className='pokemons'>
          <EmptyPage />
        </div>
        :
        (<div className='pokemons'>
          <Spinner />
        </div>)
    );
  }

  let preparedPokemons;
  if (filter) {
    preparedPokemons = <>
      {!loading ? (filteredPokemons.map(
        (pokemon: UserPokemon) => {
          const pokemonProps = { ...pokemon.monster, caughtDate: pokemon.caughtDate };
          return <PokemonCard key={pokemon.id} {...pokemonProps} />;
        },
      )) : (<Spinner />)
      }
    </>;
  } else {
    preparedPokemons = <>
      {!loading ? (pokemons.map(
        (pokemon:Pokemon) => {
          const pokemonProps = { ...pokemon };
          if (userPokemons) {
            const result = userPokemons.find((userPokemon:UserPokemon) => userPokemon.monsterId === pokemon.id);
            if (result) {
              pokemonProps.caughtDate = result.caughtDate;
            }
          }
          return <PokemonCard key={pokemon.id} {...pokemonProps} />;
        },
      )) : (<Spinner />)
      }
    </>;
  }

  const pokemonListTitle = filter ? 'My Pokemons' : 'Pokemons';
  const pokemonsListAction = filter ? fetchMoreUserPokemons : fetchMorePokemons;
  return (
    <section className='pokemons-list'>
      <div className="wrapper">
        <h2 className="title">{pokemonListTitle}</h2>
        <div className="cards-list">
          {preparedPokemons}
        </div>

        <button onClick={() => dispatch(pokemonsListAction())} className='btn btn--more'>Load more</button>
      </div>
    </section>
  );
};

export default PokemonsList;
