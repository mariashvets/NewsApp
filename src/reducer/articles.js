import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {OrderedMap , Map, Record} from 'immutable';
import {arrayToMap} from "../utils";

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: '',
    comments: []
});


const collection = arrayToMap([], ArticleModel);

export default (articles = collection, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id);

        case ADD_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], (comments) => comments.concat(randomId));

        case LOAD_ALL_ARTICLES:
            return arrayToMap(response, ArticleModel);
    }
    return articles;
}

