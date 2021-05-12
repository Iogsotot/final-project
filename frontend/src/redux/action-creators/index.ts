import * as UserActionCreators from './userActions';
import * as PokemonActionCreators from './pokemonAction';

export const ActionCreators = {
  ...UserActionCreators,
  ...PokemonActionCreators,
};
