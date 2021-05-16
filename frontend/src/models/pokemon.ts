import { Dispatch } from 'react';

export interface IPokemon {
  id?: number,
  name?: string,
}

export interface Pokemon {
  id: number;
  name: string;
  caughtDate?: string;
}

export interface PokemonListState {
  page: number;
  // pokemons: Pokemon[];
  pokemons: any;
  loading: boolean;
  error: null | string;
}

export interface FetchPokemonListAction {
  type: PokemonListActionTypes.FETCH_POKEMONS;
}

export interface FetchMorePokemonListAction {
  type: PokemonListActionTypes.FETCH_MORE_POKEMONS;
}

export interface FetchPokemonOK {
  type: PokemonListActionTypes.FETCH_POKEMONS_OK;
  // payload?: Pokemon[];
}

export interface FetchPokemonFailed {
  type: PokemonListActionTypes.FETCH_POKEMONS_FAILED;
  // payload: null | string;
}

export interface UpdatedPage {
  type: PokemonListActionTypes.UPDATED_PAGE;
  // payload: number;
}

export interface PokemonsDispatchProps {
  fetchPokemons: () => (dispatch: Dispatch<PokemonListAction>) => Promise<void>;
}

export interface ResetPage {
  type: PokemonListActionTypes.RESET_PAGE;
}

export enum PokemonListActionTypes {
  FETCH_MORE_POKEMONS = 'FETCH_MORE_POKEMONS',
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_OK = 'FETCH_POKEMONS_OK',
  FETCH_POKEMONS_FAILED = 'FETCH_POKEMONS_FAILED',
  UPDATED_PAGE = 'UPDATED_PAGE',
  RESET_PAGE = 'RESET_PAGE',
}

export type PokemonListAction =
  | FetchPokemonListAction
  | FetchMorePokemonListAction
  | FetchPokemonOK
  | FetchPokemonFailed
  | UpdatedPage
  | ResetPage;
