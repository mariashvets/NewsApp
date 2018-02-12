import {createSelector} from 'reselect';

export const articlesGetter = state => state.articles;
export const filtersGetter = state => state.filters;

export const filteredArticleSelector = createSelector (articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return Object.keys(articles).reduce((acc, id)=> {
        const published = Date.parse(articles[id].date);


        if ((!selected.length || selected.includes(articles[id])) &&
            (!from || !to || (published > from) && (published < to))) return {...acc, [id]: articles[id]};
    },{})
});


export const commentsGetter = state => state.comments;
export const idGetter = (state, props) => props.id;

export const commentSelectorFactory = () => createSelector (commentsGetter, idGetter, (comments, id) => {

    console.log('----', 'find comment', id);
    return comments[id];
});



