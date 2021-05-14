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
  const { page, pokemons, loading, error } = yield select(store => store.pokemonList);
  const { all } = yield select(store => store);
  console.log(page, loading, error);
  console.log(pokemons);
  console.log(all);

  const updatedPage = page + 1;
  const fetchPokemonsUrl = `http://localhost:7001/pokemons?_limit=12&_page=${updatedPage}`;
  try {
    let response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);

    const newArr = response.concat(pokemons);
    response = newArr;
    console.log(newArr);

    yield put({
      type: PokemonListActionTypes.FETCH_POKEMONS_SUCCESSED, payload: response,
    });
    yield put({
      type: PokemonListActionTypes.UPDATED_PAGE, payload: updatedPage,
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
