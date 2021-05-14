import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { FetchPokemonListAction, Pokemon, PokemonListActionTypes } from '../models';

function getJson(uri: string) {
  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(data => data.json());
}

function* fetchMorePokemons() {
  const { page } = yield select(store => store.pokemonList);
  const nextPage = page + 1;
  yield select(store => store.nextPage);
  const fetchPokemonsUrl = `http://localhost:7001/pokemons?_limit=12&_page=${nextPage}`;

  try {
    const response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);
    console.log(nextPage);
    yield put({
      type: PokemonListActionTypes.FETCH_POKEMONS_SUCCESSED, payload: { response, nextPage },
    });
  } catch (err) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_FAILED, payload: err });
  }
}

function* fetchPokemons() {
  const fetchPokemonsUrl = 'http://localhost:7001/pokemons?_limit=12&_page=1';

  try {
    const response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);
    yield put({
      type: PokemonListActionTypes.FETCH_POKEMONS_SUCCESSED, payload: response,
    });
  } catch (err) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_FAILED, payload: err });
  }
}

function* rootSaga(): Generator {
  yield takeEvery('FETCH_POKEMONS', fetchPokemons);
  yield takeLatest('FETCH_MORE_POKEMONS', fetchMorePokemons);
}

export default rootSaga;
