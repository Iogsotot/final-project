/* eslint-disable arrow-body-style */
import {
  FetchMoreUserPokemon,
  FetchUserPokemonListAction,
  FetchUserPokemonOK,
  UserPokemonListActionTypes,
  CatchPokemons,
  UserPokemon,
  CatchPokemonsOK,
} from '../../models';

const {
  FETCH_USER_POKEMONS,
  FETCH_USER_POKEMONS_OK,
  FETCH_MORE_USER_POKEMONS,
  CATCH_POKEMONS,
  CATCH_POKEMONS_OK,
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

export const catchPokemons = (newPokemon: UserPokemon): CatchPokemons => {
  return {
    type: CATCH_POKEMONS, payload: newPokemon,
  };
};

export const catchPokemonsOK = (): CatchPokemonsOK => {
  return {
    type: CATCH_POKEMONS_OK,
  };
};
