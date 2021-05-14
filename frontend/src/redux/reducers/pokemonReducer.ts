/* eslint-disable  */
import { PokemonListAction, PokemonListActionTypes, PokemonListState } from '../../models/pokemon';

const {
  FETCH_POKEMONS,
  FETCH_MORE_POKEMONS,
  FETCH_POKEMONS_OK,
  FETCH_POKEMONS_FAILED,
  UPDATED_PAGE
} = PokemonListActionTypes;

export const initialState: PokemonListState = {
  pokemons: [],
  page: 1,
  loading: false,
  error: null,
};

export const pokemonListReducer = (state = initialState, action: PokemonListAction): PokemonListState => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return { ...state, loading: true };

    case FETCH_MORE_POKEMONS:
      //@ts-ignore
      return { ...state, loading: true };

    case FETCH_POKEMONS_OK:
      //@ts-ignore
      return { ...state, loading: false, pokemons: action.payload };

    case FETCH_POKEMONS_FAILED:
      //@ts-ignore
      return { ...state, loading: false, error: action.payload };

    case UPDATED_PAGE:
      //@ts-ignore
      return { ...state, page: action.payload }
    default:
      return state;
  }
};
