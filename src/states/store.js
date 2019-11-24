import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './duck/index';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    appReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;