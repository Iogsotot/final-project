import { Dispatch } from 'react';
// import { API_BASE_URL, USER_POKEMONS_FILTERS } from '../../constants';
import { API_BASE_URL } from '../../constants';
import {
  FetchUserPokemonsProps,
  FetchPokemonListAction,
  Pokemon,
  PokemonListAction,
  PokemonListActionTypes,
} from '../../models';

const {
  FETCH_POKEMONS_API,
} = PokemonListActionTypes;

export const fetchUserPokemons = ({
  userId,
}: FetchUserPokemonsProps) => async (dispatch: Dispatch<PokemonListAction>): Promise<void> => {
  dispatch({
    type: FETCH_POKEMONS_API,
    payload: {
      sort: 0,
    },
  });
};
