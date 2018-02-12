import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';
import {OrderedMap , Map, Record} from 'immutable';
import {arrayToMap} from "../utils";

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: '',
    comments: []
});


const collection = arrayToMap(defaultArticles, ArticleModel);

export default (articles = collection, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id);

        case ADD_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], (comments) => comments.concat(randomId));
            // return {
            //     ...articles,
            //     [payload.articleId] : {
            //         ...articles[payload.articleId],
            //         comments:(articles[payload.articleId].comments || []).concat(randomId)
            //     }
            // }
    }
    return articles;
}

