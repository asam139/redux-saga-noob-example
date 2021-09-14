import { all } from 'redux-saga/effects';
import { authSagas } from './login';

function* root() {
  yield all([
    ...authSagas,
  ]);
}

export const rootSaga = root;
