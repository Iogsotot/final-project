/* eslint-disable arrow-body-style */
import {
  FetchUserPokemonListAction,
  FetchUserPokemonOK,
  UserPokemonListActionTypes,
} from '../../models';

const {
  FETCH_USER_POKEMONS,
  FETCH_USER_POKEMONS_OK,
} = UserPokemonListActionTypes;

export const fetchUserPokemons = (): FetchUserPokemonListAction => {
  return {
    type: FETCH_USER_POKEMONS,
  };
};

export const fetchUserPokemonsOK = (): FetchUserPokemonOK => {
  return {
    type: FETCH_USER_POKEMONS_OK,
  };
};
