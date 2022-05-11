import {compose, createStore, applyMiddleware} from 'redux';
import logger  from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWare = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
// call this before action called
const composedEnhancers = compose(applyMiddleware(...middleWare));
export const store = createStore(rootReducer, undefined, composedEnhancers)