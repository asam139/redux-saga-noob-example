import {
  call, put, takeLatest, spawn,
} from 'redux-saga/effects';
import * as loginApi from '../api/login';
import { login, loginSuccess, loginFailure } from '../features/authSlice';

function* loginWorker(action) {
  try {
    const response = yield call(() => loginApi.login(action.payload));
    yield put(loginSuccess(response.data));
  } catch (e) {
    yield put(loginFailure());
  }
}

function* watchLogin() {
  yield takeLatest(login, loginWorker);
}

export const authSagas = [spawn(watchLogin)];
