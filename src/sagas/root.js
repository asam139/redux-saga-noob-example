import { all } from 'redux-saga/effects';
import { loginSagas } from './login';
import { usersSagas } from './users';

function* root() {
  yield all([
    ...loginSagas,
    ...usersSagas,
  ]);
}

export const rootSaga = root;
