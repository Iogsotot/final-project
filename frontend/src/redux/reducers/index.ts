import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  user: userReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
