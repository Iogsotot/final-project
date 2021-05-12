import { PokemonListAction, PokemonListActionTypes, PokemonListState } from '../../models/pokemon';

const {
  FETCH_POKEMONS_API,
  // SET_POKEMONS,
} = PokemonListActionTypes;

export const initialState: PokemonListState = {
  name: '',
  id: null,
  displayButton: true,
  loading: true,
};

export const pokemonListReducer = (state = initialState, action: PokemonListAction): PokemonListState => {
  switch (action.type) {
    case FETCH_POKEMONS_API:
      return { ...state, loading: true };

      // case SET_POKEMONS:
      //   return { ...state, pokemons: action.payload, hiddenLoading: false };

    default:
      return state;
  }
};
