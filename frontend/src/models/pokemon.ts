import { Dispatch } from 'react';

export interface IPokemon {
  id?: number,
  name?: string,
}

export interface Pokemon {
  id?: string;
  page?: number;
  name: string;
}
export interface PokemonListState {
  page: number;
  pokemons: Pokemon[];
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
  // payload: Pokemon[];
  type: PokemonListActionTypes.FETCH_POKEMONS_OK;
}

export interface FetchPokemonFailed {
  type: PokemonListActionTypes.FETCH_POKEMONS_FAILED;
}

export interface UpdatedPage {
  type: PokemonListActionTypes.UPDATED_PAGE;
}

export interface PokemonsDispatchProps {
  fetchPokemons: () => (dispatch: Dispatch<PokemonListAction>) => Promise<void>;
}

export enum PokemonListActionTypes {
  FETCH_MORE_POKEMONS = 'FETCH_MORE_POKEMONS',
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_OK = 'FETCH_POKEMONS_OK',
  FETCH_POKEMONS_FAILED = 'FETCH_POKEMONS_FAILED',
  UPDATED_PAGE = 'UPDATED_PAGE',
}

export type PokemonListAction =
  | FetchPokemonListAction
  | FetchMorePokemonListAction
  | FetchPokemonOK
  | FetchPokemonFailed
  | UpdatedPage;
