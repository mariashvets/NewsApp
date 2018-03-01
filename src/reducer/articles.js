import {
    DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START, LOAD_ARTICLE,
    LOAD_ARTICLE_COMMENTS
} from '../constants';
import {OrderedMap , Map, Record} from 'immutable';
import {arrayToMap} from "../utils";

const ArticleModel = Record({
    id: null,
    date: null,
    title: null,
    text: '',
    comments: [],
    loading: false,
    loadingComments: false,
    loadedComments: false
});

const DefaultReducerState = Record({
    entities: new OrderedMap,
    loaded: false,
    loading: false,
});

export default (articles = new DefaultReducerState(), action) => {

    const {type, payload, randomId, response} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id]);

        case ADD_COMMENT:
            return articles.updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat(randomId));

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .update('entities',entities => arrayToMap(response, ArticleModel).merge(entities))
                .set('loading', false)
                .set('loaded', true);

        case LOAD_ARTICLE + START:
            return articles.updateIn(
                ['entities', payload.id],
                new ArticleModel({id:payload.id}),
                article => article.set('loading', true));

        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', payload.id], new ArticleModel(payload.response))
                .setIn(['entities', payload.id, 'loading'], false);

        case LOAD_ARTICLE_COMMENTS + START:
            return articles.setIn(['entities', payload.articleId, 'loadingComments' ], true);

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return articles
                .setIn(['entities', payload.articleId, 'loadingComments' ], false)
                .setIn(['entities', payload.articleId, 'loadedComments' ], true)
    }
    return articles;
}

