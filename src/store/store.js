import {createStore, compose, applyMiddleware} from 'redux';
// import logger  from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

// const middleWare = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

const persistConfig = {
  key: 'rot',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// call this before action called
const composedEnhancers = compose(applyMiddleware());
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistore = persistStore(store);