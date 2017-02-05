import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

const logger = createLogger();

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));

    return store;
}