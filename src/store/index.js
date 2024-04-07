import { applyMiddleware, createStore, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import reducers from '../reducers';

const middlewares = [
  thunk,
];

// Apply logger if we are in debug mode.
if (__DEV__) {
  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  //   blacklist: [],
  //  whitelist:[],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);