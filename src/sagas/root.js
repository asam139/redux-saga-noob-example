import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { usersSagas } from './users';

function* root() {
  yield all([
    ...authSagas,
    ...usersSagas,
  ]);
}

export const rootSaga = root;
