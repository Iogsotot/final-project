/* eslint-disable  */
import { PokemonListAction, PokemonListActionTypes, PokemonListState } from '../../models/pokemon';

const {
  FETCH_POKEMONS,
  FETCH_MORE_POKEMONS,
  FETCH_POKEMONS_SUCCESSED,
  FETCH_POKEMONS_FAILED,
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
      console.log(state.page);
      return { ...state, loading: true };
    case FETCH_MORE_POKEMONS:
      return { ...state, loading: true, };

    case FETCH_POKEMONS_SUCCESSED:
      console.log(action);
      //@ts-ignore
      return { ...state, loading: false, pokemons: action.payload.response, page: action.payload.nextPage };

    case FETCH_POKEMONS_FAILED:
      //@ts-ignore
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
