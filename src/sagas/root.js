import { all } from 'redux-saga/effects';
import { authSagas } from './auth';

function* root() {
  yield all([
    ...authSagas,
  ]);
}

export const rootSaga = root;
