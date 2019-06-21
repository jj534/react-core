import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise, logger));

export default store;