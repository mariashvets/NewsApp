import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class ArticleList extends Component  {

    static PropTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        openArticleId: null
    };

    render(){
        const {articles} = this.props;
        const elements = articles.map((article) => {

            return <li key={article.id}>
                        <Article  article={article}
                            isOpen = {article.id === this.state.openArticleId}
                            toggleOpen = {this.toggleArticle(article.id)}/>
                    </li>
        });
        return (
            <ul>{elements}</ul>
        );

    }

    toggleArticle = openArticleId => ev => {
        this.setState ({openArticleId});
    }
}


export default ArticleList;




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

