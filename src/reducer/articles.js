import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {});

export default (articles = articlesMap, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case DELETE_ARTICLE:
            const tempArticles = articles;
            delete tempArticles[payload.id];
            return tempArticles;

        case ADD_COMMENT:
            return {
                ...articles,
                [payload.articleId] : {
                    ...articles[payload.articleId],
                    comments:(articles[payload.articleId].comments || []).concat(randomId)
                }
            }
    }
    return articles;
}

