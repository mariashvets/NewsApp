import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers ({
    counter: counterReducer,
    articles, filters, comments
});
