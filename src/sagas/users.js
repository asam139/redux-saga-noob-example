import {
  call, put, takeLatest,
  select,
  debounce,
  spawn,
} from 'redux-saga/effects';
import * as usersApi from '../api/users';
import {
  getUsers, usersSuccess, usersFailure, filterUsersBy, setFilteredUsers,
} from '../features/usersSlice';
import { usersSelector } from '../selectors/users';

function* usersWorker() {
  try {
    const response = yield call(() => usersApi.users());
    yield put(usersSuccess(response.data));
  } catch (e) {
    yield put(usersFailure());
  }
}

function* watchGetUsers() {
  yield takeLatest(getUsers, usersWorker);
}

function* filterUsersByWorker(action) {
  const { email } = action.payload;
  const users = yield select(usersSelector);
  const filteredUsers = users.filter((user) => user.email.includes(email));
  yield put(setFilteredUsers(filteredUsers));
}

function* watchFilterUsersBy() {
  yield debounce(500, filterUsersBy, filterUsersByWorker);
}

export const usersSagas = [spawn(watchGetUsers), spawn(watchFilterUsersBy)];
