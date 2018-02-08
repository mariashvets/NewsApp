import {createSelector} from 'reselect';

export const articlesGetter = state => state.articles;
export const filtersGetter = state => state.filters;

export const filteredArticleSelector = createSelector (articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return articles.filter(article => {
        const published = Date.parse(article.date);

        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from) && (published < to))
    })
});


export const commentsGetter = state => state.comments;
export const idGetter = (state, props) => props.id;

export const commentSelectorFactory = () => createSelector (commentsGetter, idGetter, (comments, id) => {

    console.log('----', 'find comment', id);
    return comments[id];
});



