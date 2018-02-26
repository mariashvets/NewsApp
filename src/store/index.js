import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer/index';
import logger from '../middlewares/logger';
import idGenerator from '../middlewares/idGenerator';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware( routerMiddleware(history), thunk, idGenerator, api, logger )
//    other store enhancers if any
);

//Store принимает 3 аргумента:
//1 обязательный - reducer
//2 необязательный - начальное состояния store
//3 middleware (enhancer)
const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;