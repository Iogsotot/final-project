import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  FetchPokemonListAction,
  Pokemon,
  PokemonListActionTypes,
  UserPokemonListActionTypes,
} from '../models';

function getJson(uri: string) {
  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(data => data.json());
}

function* fetchMorePokemons() {
  const { page, pokemons } = yield select(store => store.pokemonList);

  const updatedPage = page + 1;
  const fetchPokemonsUrl = `http://localhost:7001/monsters?_limit=12&_page=${updatedPage}`;
  try {
    let response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);

    const newArr = pokemons.concat(response);
    response = newArr;
    console.log(newArr);

    yield put({
      type: PokemonListActionTypes.FETCH_POKEMONS_OK, payload: response,
    });
    yield put({
      type: PokemonListActionTypes.UPDATED_PAGE, payload: updatedPage,
    });
  } catch (err) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_FAILED, payload: err });
  }
}

function* fetchPokemons() {
  const fetchPokemonsUrl = 'http://localhost:7001/monsters?_limit=12&_page=1';
  try {
    const response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);
    yield put({
      type: PokemonListActionTypes.FETCH_POKEMONS_OK, payload: response,
    });
  } catch (err) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_FAILED, payload: err });
  }
}

function* fetchMoreUserPokemons() {
  const { page, pokemons, userId } = yield select(store => store.userPokemonList);

  const updatedPage = page + 1;

  const fetchUserPokemonsUrl =
    `http://localhost:7001/users_monsters?_expand=user&_expand=monster&userId=${userId}&_limit=12&_page=${updatedPage}`;

  try {
    const response: Pokemon[] = yield call(getJson, fetchUserPokemonsUrl);
    let newArr = response;
    if (pokemons !== undefined) {
      newArr = pokemons.concat(response);
    }
    console.log({ newArr });

    yield put({
      type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_OK, payload: newArr,
    });
    yield put({
      type: UserPokemonListActionTypes.UPDATED_USER_PAGE, payload: updatedPage,
    });
  } catch (err) {
    yield put({
      type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_FAILED, payload: err,
    });
  }
}

function* fetchUserPokemons() {
  const { userId } = yield select(store => store.userPokemonList);
  const fetchPokemonsUrl =
    `http://localhost:7001/users_monsters?_expand=user&_expand=monster&userId=${userId}&_limit=12&_page=1`;

  try {
    const response: Pokemon[] = yield call(getJson, fetchPokemonsUrl);
    const newArr = response;
    yield put({
      type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_OK, payload: newArr,
    });
  } catch (err) {
    yield put({
      type: UserPokemonListActionTypes.FETCH_USER_POKEMONS_FAILED, payload: err,
    });
  }
}

function* rootSaga(): Generator {
  yield takeEvery('FETCH_POKEMONS', fetchPokemons);
  yield takeLatest('FETCH_MORE_POKEMONS', fetchMorePokemons);
  yield takeEvery('FETCH_USER_POKEMONS', fetchUserPokemons);
}

export default rootSaga;
