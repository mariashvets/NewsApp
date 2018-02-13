import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START} from '../constants';
import {OrderedMap , Map, Record} from 'immutable';
import {arrayToMap} from "../utils";

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: '',
    comments: []
});


const DefaultReducerState = Record({
    entities: new OrderedMap,
    loaded: false,
    loading: false
});



export default (articles = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities',payload.id]);

        case ADD_COMMENT:
            return articles.updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat(randomId));

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('entities',arrayToMap(response, ArticleModel))
                .set('loading', false)
                .set('loaded', true);
    }
    return articles;
}

