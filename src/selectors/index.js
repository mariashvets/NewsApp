import {createSelector} from 'reselect';
import {mapToArray} from "../utils";

export const articlesGetter = state => state.articles;
export const filtersGetter = state => state.filters;

export const filteredArticleSelector = createSelector (articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return mapToArray(articles).filter( article => {
        const published = Date.parse(article.date);


        return ((!selected.length || selected.includes(article)) &&
            (!from || !to || (published > from) && (published < to)));
    },{})
});


export const commentsGetter = state => state.comments;
export const idGetter = (state, props) => props.id;

export const commentSelectorFactory = () => createSelector (commentsGetter, idGetter, (comments, id) => {

    return comments.get(id);
});



