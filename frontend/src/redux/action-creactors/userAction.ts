/* eslint-disable arrow-body-style */
import {
  FetchMoreUserPokemon,
  FetchUserPokemonListAction,
  FetchUserPokemonOK,
  UserPokemonListActionTypes,
} from '../../models';

const {
  FETCH_USER_POKEMONS,
  FETCH_USER_POKEMONS_OK,
  FETCH_MORE_USER_POKEMONS,
} = UserPokemonListActionTypes;

export const fetchUserPokemons = (): FetchUserPokemonListAction => {
  return {
    type: FETCH_USER_POKEMONS,
  };
};

export const fetchMoreUserPokemons = (): FetchMoreUserPokemon => {
  return {
    type: FETCH_MORE_USER_POKEMONS,
  };
};

export const fetchUserPokemonsOK = (): FetchUserPokemonOK => {
  return {
    type: FETCH_USER_POKEMONS_OK,
  };
};
