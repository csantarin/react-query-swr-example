import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootRuntime } from 'root/sm/root.sagas';
import { rootReducer } from 'root/sm/root.slice';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true,
      thunk: true,
    });

    return defaultMiddleware.concat(middleware);
  },
});

sagaMiddleware.run(rootRuntime);

export default store;
