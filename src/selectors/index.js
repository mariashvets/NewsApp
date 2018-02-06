export function filteredArticleSelector (state) {
    debugger;
    const {selected, dateRange: {from, to}} = state.filters;
    return state.articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from) && (published < to))
    })
}

