/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  FETCH_MORE_USER_POKEMONS,
  CATCH_POKEMONS,
  CATCH_POKEMONS_FAILED,
  CATCH_POKEMONS_OK,
} = UserPokemonListActionTypes;

export const initialState: UserPokemonListState = {
  // userId: null,
  userId: 1,
  userName: '',
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

    case FETCH_MORE_USER_POKEMONS:
      return { ...state, loading: true };

    case FETCH_USER_POKEMONS_OK:

      return { ...state, loading: false, userPokemons: action.payload };

    case FETCH_USER_POKEMONS_FAILED:
      return { ...state, loading: false, error: action.payload };

    case UPDATED_USER_PAGE:
      return { ...state, page: action.payload };

    case CATCH_POKEMONS:
      return { ...state };

    case CATCH_POKEMONS_FAILED:
      return { ...state, error: action.payload };

    case CATCH_POKEMONS_OK:
      return { ...state, userPokemons: [...state.userPokemons, action.payload] };

    default:
      return state;
  }
};
