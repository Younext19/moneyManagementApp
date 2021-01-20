import {combineReducers, createStore} from 'redux';

import DataReducer from './DataReducer';
import {persistReducer, persistStore} from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

const AppReducers = combineReducers({DataReducer});
const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: ['DataReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
export const persistedStore = persistStore(store);

export default store;
