import { Pokemon } from './pokemon';

export interface UserPokemon {
  monster?: Pokemon;
  monsterId: number;
  caughtDate: string;
  id?: string;
  // page?: number;
  name: string;
}

export interface UserPokemonListState {
  page: number;
  userPokemons: UserPokemon[];
  loading: boolean;
  error: null | string;
  userId: number | null;
  userName: string;
}

export interface FetchUserPokemonListAction {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS;
}

export interface FetchUserPokemonOK {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_OK;
  // payload?: Pokemon[],
}

export interface FetchMoreUserPokemon {
  type: UserPokemonListActionTypes.FETCH_MORE_USER_POKEMONS;
}

export interface FetchUserPokemonFailed {
  type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_FAILED;
  payload: null | string,
}

export interface UpdatedUserPage {
  type: UserPokemonListActionTypes.UPDATED_USER_PAGE;
  payload: number,
}

export enum UserPokemonListActionTypes {
  FETCH_USER_POKEMONS = 'FETCH_USER_POKEMONS',
  FETCH_MORE_USER_POKEMONS = 'FETCH_MORE_USER_POKEMONS',
  FETCH_USER_POKEMONS_OK = 'FETCH_USER_POKEMONS_OK',
  FETCH_USER_POKEMONS_FAILED = 'FETCH_USER_POKEMONS_FAILED',
  UPDATED_USER_PAGE = 'UPDATED_USER_PAGE',
}

export type UserPokemonListAction =
  | FetchUserPokemonListAction
  | FetchMoreUserPokemon
  | FetchUserPokemonOK
  | FetchUserPokemonFailed
  | UpdatedUserPage;
