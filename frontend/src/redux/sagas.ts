import { call, put, takeLatest, select, ForkEffect } from 'redux-saga/effects';
import { API_BASE_URL } from '../constants';
import { FetchPokemonListAction, Pokemon, PokemonListActionTypes } from '../models';

function getJson(uri: string) {
  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(data => data.json());
}

function* fetchPokemonsSaga(action: FetchPokemonListAction) {
  const { group, page } = yield select(store => store.pokemonList);
  const { sort } = action.payload;
  const fetchPokemonsUrl = `${API_BASE_URL}/pokemons`;

  try {
    const response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);
    yield put({ type: PokemonListActionTypes.FETCH_POKEMON_LIST_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_API_ERROR, payload: error });
  }
}

// function* rootSaga(): Generator<void> {
function* rootSaga(): Generator<ForkEffect<never>> {
  yield takeLatest('FETCH_POKEMONS_API', fetchPokemonsSaga);
}

export default rootSaga;
