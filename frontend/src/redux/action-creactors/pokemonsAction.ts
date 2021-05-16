/* eslint-disable arrow-body-style */
import {
  FetchPokemonListAction,
  FetchMorePokemonListAction,
  FetchPokemonOK,
  PokemonListActionTypes,
} from '../../models';

const {
  FETCH_POKEMONS,
  FETCH_MORE_POKEMONS,
  FETCH_POKEMONS_OK,
} = PokemonListActionTypes;

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

export const fetchPokemonsOK = (): FetchPokemonOK => {
  return {
    type: FETCH_POKEMONS_OK,
  };
};
