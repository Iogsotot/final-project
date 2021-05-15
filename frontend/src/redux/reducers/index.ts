import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonReducer';
import { userListReducer } from './userReducer';

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  userPokemonList: userListReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
