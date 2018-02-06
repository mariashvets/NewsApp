import React, {Component} from 'react';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import Article from './Article/index.js';
import {connect} from 'react-redux';
import {filteredArticleSelector} from '../selectors';


class ArticleList  extends Component {

    componentDidMount() {
        console.log('---', this.refs);
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func.isRequired,
    };

    render(){
        const {articles, openItemId, toggleItem} = this.props;
        const elements = articles.map((article) => {

            return <li key={article.id} ref={article.id}>
                <Article article={article}
                         isOpen={article.id === openItemId}
                         toggleOpen={toggleItem(article.id)}/>
            </li>
        });
        return (
            <ul>{elements}</ul>
        );
    }
}

export default connect((state) => {
    return {
        articles: filteredArticleSelector(state)
    }

})(accordion(ArticleList));
