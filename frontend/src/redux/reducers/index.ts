import { combineReducers } from 'redux';
import { pokemonListReducer } from './pokemonReducer';

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
