import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    SUCCESS,
    FAIL,
    LOAD_ARTICLE_COMMENTS,
    LOAD_COMMENTS_PAGE
} from '../constants';
import $ from 'jQuery';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true,
    }
}

export function loadArticleComments (articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        callAPI: `/api/comment?article=${articleId}`,
        payload: { articleId }
    }
}

export function loadCommentsPage (page) {
    return {
        type: LOAD_COMMENTS_PAGE,
        callAPI: `/api/comment?limit=5&offset=${page*5}`,
        payload: { page }
    }
}


export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        });

        setTimeout(() => {
            $.get(`/api/article/${id}`)

                .done(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response}
                }))
                .fail(error => dispatch({
                    type: LOAD_ARTICLE + ERROR,
                    payload: {error, id}
                }))
        }, 1000)
    }
}








