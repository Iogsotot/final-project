import { call, put, select, takeLatest, takeEvery, take } from 'redux-saga/effects';
import {
  FetchPokemonListAction,
  Pokemon,
  PokemonListActionTypes,
  UserPokemonListActionTypes,
  UserPokemon,
} from '../models';

function getJson(uri: string) {
  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(data => data.json());
}

function postJson(uri: string, body: any) {
  return fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
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
    yield put({
      type: PokemonListActionTypes.RESET_PAGE,
    });
  } catch (err) {
    yield put({ type: PokemonListActionTypes.FETCH_POKEMONS_FAILED, payload: err });
  }
}

function* fetchMoreUserPokemons() {
  const { page, userPokemons, userId } = yield select(store => store.userPokemonList);

  let updatedPage = page;
  const pokemonsPerPage = 12;
  console.log(userPokemons);

  if (page < (userPokemons.length / pokemonsPerPage)) {
    updatedPage += 1;
  }

  const fetchUserPokemonsUrl =
    `http://localhost:7001/users_monsters?_expand=user&_expand=monster&userId=${userId}&_limit=12&_page=${updatedPage}`;

  try {
    const response: Pokemon[] = yield call(getJson, fetchUserPokemonsUrl);
    let newArr = response;
    if (userPokemons !== undefined) {
      newArr = userPokemons.concat(response);
    }

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

function* catchPokemons(action: any) {
  const { userId, userPokemons } = yield select(store => store.userPokemonList);
  const fetchPokemonsUrl =
    'http://localhost:7001/users_monsters/';

  const updatedUserPokemons = [...userPokemons];
  console.log(action);

  try {
    const body = action.payload;
    const response: Pokemon[] = yield call(postJson, fetchPokemonsUrl, body);
    // проверить, что запрос ушёл и всё ок
    updatedUserPokemons.push(body);
    console.log(body);

    // изменить состояние покемона в store
    yield put({
      type: UserPokemonListActionTypes.CATCH_POKEMONS_OK, payload: body,
    });
    // просто позову другую сагу
  } catch (err) {
    console.error(err);
    yield put({
      type: UserPokemonListActionTypes.CATCH_POKEMONS_FAILED, payload: err,
    });
  }
}

function* rootSaga(): Generator {
  yield takeEvery('FETCH_POKEMONS', fetchPokemons);
  yield takeLatest('FETCH_MORE_POKEMONS', fetchMorePokemons);
  yield takeEvery('FETCH_USER_POKEMONS', fetchUserPokemons);
  yield takeLatest('FETCH_MORE_USER_POKEMONS', fetchMoreUserPokemons);
  yield takeEvery('CATCH_POKEMONS', catchPokemons);
}

export default rootSaga;
