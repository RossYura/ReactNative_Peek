import {combineReducers, createStore, Store} from 'redux';
import {ActionType} from 'typesafe-actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';

import * as reducers from './reducers';
import * as actions from './actions';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store as unknown as Store, null);

export {store, persistor};

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = ActionType<typeof actions>;
