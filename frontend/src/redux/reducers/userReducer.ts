import {
  UserPokemonListAction,
  UserPokemonListActionTypes,
  UserPokemonListState,
} from '../../models/user';

const {
  FETCH_USER_POKEMONS,
  FETCH_USER_POKEMONS_OK,
  FETCH_USER_POKEMONS_FAILED,
  UPDATED_USER_PAGE,
} = UserPokemonListActionTypes;

export const initialState: UserPokemonListState = {
  userId: null,
  page: 1,
  loading: false,
  error: null,
  userPokemons: [],
};

export const userPokemonListReducer = (
  state = initialState,
  action: UserPokemonListAction,
): UserPokemonListState => {
  switch (action.type) {
    case FETCH_USER_POKEMONS:
      return { ...state, loading: true };

    case FETCH_USER_POKEMONS_OK:
      return { ...state, loading: false, userPokemons: action.payload };

    case FETCH_USER_POKEMONS_FAILED:
      return { ...state, loading: false, error: action.payload };

    case UPDATED_USER_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
