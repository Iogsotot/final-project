import { Dispatch } from 'react';
import { Pokemon } from './pokemon';

export interface UserPokemonListState {
  page: number;
  userPokemons: Pokemon[];
  loading: boolean;
  error: null | string;
  userId: number | null;
}

export interface FetchUserPokemonListAction {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS;
}

export interface FetchUserPokemonOK {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_OK;
  payload: Pokemon[],
}

export interface FetchUserPokemonFailed {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_FAILED;
  payload: string,
}

export interface UpdatedUserPage {
  type: UserPokemonListActionTypes.UPDATED_USER_PAGE;
  payload: number,
}

export enum UserPokemonListActionTypes {
  FETCH_USER_POKEMONS = 'FETCH_USER_POKEMONS',
  FETCH_USER_POKEMONS_OK = 'FETCH_USER_POKEMONS_OK',
  FETCH_USER_POKEMONS_FAILED = 'FETCH_USER_POKEMONS_FAILED',
  UPDATED_USER_PAGE = 'UPDATED_USER_PAGE',
}

export type UserPokemonListAction =
  | FetchUserPokemonListAction
  | FetchUserPokemonOK
  | FetchUserPokemonFailed
  | UpdatedUserPage;
