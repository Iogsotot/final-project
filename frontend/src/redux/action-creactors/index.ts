import * as PokemonsActionCreators from './pokemonsAction';
import * as UserPokemonsActionCreators from './userAction';

export const ActionCreators = {
  ...PokemonsActionCreators,
  ...UserPokemonsActionCreators,
};
