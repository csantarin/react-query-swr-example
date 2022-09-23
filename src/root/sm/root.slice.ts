import { combineReducers } from 'redux';

const reducers = {
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
