/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable arrow-body-style */
import {
  FetchPokemonListAction,
  FetchMorePokemonListAction,
  FetchPokemonSuccessed,
  PokemonListActionTypes,
  // Pokemon,
} from '../../models';

const {
  FETCH_POKEMONS,
  FETCH_MORE_POKEMONS,
  FETCH_POKEMONS_SUCCESSED,
} = PokemonListActionTypes;

// В таком виде он грузит мне 12 покемонов (всегда одних и тех же)
export const fetchPokemons = (): FetchPokemonListAction => {
  return {
    type: FETCH_POKEMONS,
  };
};

export const fetchMorePokemons = (): FetchMorePokemonListAction => {
  return {
    type: FETCH_MORE_POKEMONS,
  };
};

export const fetchPokemonsSuccessed = (): FetchPokemonSuccessed => {
  return {
    type: FETCH_POKEMONS_SUCCESSED,
  };
};
