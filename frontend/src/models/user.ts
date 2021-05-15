import { Pokemon } from './pokemon';

export interface UserPokemon {
  monster?: Pokemon;
  monsterId?: number;
  userId?: number | null;
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
  // payload?: UserPokemon[];
  payload?: any;
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

export interface CatchPokemons {
  payload: UserPokemon;
  type: UserPokemonListActionTypes.CATCH_POKEMONS;
}

export interface CatchPokemonsFailed {
  payload: string | null;
  type: UserPokemonListActionTypes.CATCH_POKEMONS_FAILED
}

export interface CatchPokemonsOK {
  type: UserPokemonListActionTypes.CATCH_POKEMONS_OK;
  // payload: UserPokemon[];
  payload?: any;
}

export enum UserPokemonListActionTypes {
  FETCH_USER_POKEMONS = 'FETCH_USER_POKEMONS',
  FETCH_MORE_USER_POKEMONS = 'FETCH_MORE_USER_POKEMONS',
  FETCH_USER_POKEMONS_OK = 'FETCH_USER_POKEMONS_OK',
  FETCH_USER_POKEMONS_FAILED = 'FETCH_USER_POKEMONS_FAILED',
  UPDATED_USER_PAGE = 'UPDATED_USER_PAGE',
  CATCH_POKEMONS = 'CATCH_POKEMONS',
  CATCH_POKEMONS_OK = 'CATCH_POKEMONS_OK',
  CATCH_POKEMONS_FAILED = 'CATCH_POKEMONS_FAILED',
}

export type UserPokemonListAction =
  | FetchUserPokemonListAction
  | FetchMoreUserPokemon
  | FetchUserPokemonOK
  | FetchUserPokemonFailed
  | UpdatedUserPage
  | CatchPokemons
  | CatchPokemonsFailed
  | CatchPokemonsOK;
