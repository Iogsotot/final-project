import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonReducer';
import { userPokemonListReducer } from './userReducer';

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  userPokemonList: userPokemonListReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
