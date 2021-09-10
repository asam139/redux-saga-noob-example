import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { postRequest } from '../../app/axiosClient';
import { login, loginSuccess, loginFailure } from './authenticationSlice';

function* loginAPI(action) {
  try {
    const response = yield call(() => postRequest('login', action.payload));
    yield put(loginSuccess(response.data));
  } catch (e) {
    yield put(loginFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(login, loginAPI)]);
}
