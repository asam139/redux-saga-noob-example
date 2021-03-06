import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducers';
import { rootSaga } from '../sagas/root';

export const setUpStore = (preloadedState) => {
  const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware();
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger, immutableInvariantMiddleware, sagaMiddleware],
    preloadedState,
  });
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
