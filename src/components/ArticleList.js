import React from 'react';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import Article from './Article';


function ArticleList (props) {

    const {articles, openArticleId, toggleArticle} = props;
    const elements = articles.map((article) => {

        return <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     toggleOpen={toggleArticle(article.id)}/>
        </li>
    });
    return (
        <ul>{elements}</ul>
    );
}

ArticleList.PropTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string.isRequired,
    toggleArticle: PropTypes.func.isRequired,
};


export default accordion(ArticleList);




// export default function ArticleList ({articles}) {
//
//     const elements = articles.map((article) => {
//
//         return <li key={article.id}>
//                     <Article  article={article}/>
//                 </li>
//     });
//     return (
//         <ul>{elements}</ul>
//     )
// }
//
// ArticleList.PropTypes = {
//     articles: PropTypes.array.isRequired
// };

