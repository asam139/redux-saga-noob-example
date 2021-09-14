import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import * as usersApi from '../api/users';
import { getUsers, usersSuccess, usersFailure } from '../features/usersSlice';

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

export const usersSagas = [watchGetUsers()];
