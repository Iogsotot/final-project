import { Dispatch } from 'react';

export interface UserPokemon {
  isCaught: boolean;
}

export interface Pokemon {
  name: string,
  id: number
}

export interface PokemonListState {
  id: number | null;
  name: string;
  displayButton: boolean;
  loading: true;
  // isCaught: boolean;
}

export interface FetchUserPokemonsProps {
  // group: number;
  // page?: number;
  // amount?: number;
  // userId: number;
  userId: any;
}

// interface FetchUserPokemonsUpdateAction {
//   type: PokemonListActionTypes.START_FETCH_POKEMON_UPDATE;
// }
interface FetchUserPokemonsSuccessAction {
  type: PokemonListActionTypes.FETCH_POKEMON_LIST_SUCCESS;
  payload: Pokemon[];
}

interface FetchUserPokemonsErrorAction {
  type: PokemonListActionTypes.FETCH_POKEMONS_API_ERROR;
  payload: string;
}

export interface PokemonsDispatchProps {
  // fetchUserPokemons: (
  //   id: number,
  //   name: string,
  // ) => (dispatch: Dispatch<PokemonListAction>) => Promise<void>;
  showButtons: (show: boolean) => (dispatch: Dispatch<PokemonListAction>) => void;
  setGroup: (number: number) => (dispatch: Dispatch<PokemonListAction>) => void;
  fetchPokemons: (group: number, page: number, sort?: number) =>
    (dispatch: Dispatch<PokemonListAction>) => Promise<void>;
  fetchUserPokemons: (props: FetchUserPokemonsProps) => (dispatch: Dispatch<PokemonListAction>) => Promise<void>;
}

export interface FetchPokemonListAction {
  type: PokemonListActionTypes.FETCH_POKEMONS_API;
  payload: {
    page?: number,
    sort: number,
  }
}

export enum PokemonListActionTypes {
  FETCH_POKEMONS_API = 'FETCH_POKEMONS_API',
  FETCH_POKEMONS_API_ERROR = 'FETCH_POKEMONS_API_ERROR',
  SET_POKEMONS = 'SET_POKEMONS',
  FETCH_POKEMON_LIST_SUCCESS = 'FETCH_POKEMON_LIST_SUCCESS',
}

export type PokemonListAction =
  | FetchPokemonListAction;
