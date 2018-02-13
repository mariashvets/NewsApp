import React, {Component} from 'react';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import Article from './Article/index.js';
import {connect} from 'react-redux';
import {filteredArticleSelector} from '../selectors';
import {loadAllArticles} from '../AC';
import Loader from "./Loader";

class ArticleList  extends Component {

    componentDidMount() {
        const {isLoading, loaded, loadAllArticles} = this.props;
        if( !isLoading && !loaded ) loadAllArticles();
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func.isRequired,
    };

    render(){
        const {articles, openItemId, isLoading, toggleItem} = this.props;
        if(isLoading) return <Loader/>;

        const elements = articles.map(article => {

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
        articles: filteredArticleSelector(state),
        isLoading: state.articles.loading,
        loaded: state.articles.loaded
    }

}, {loadAllArticles})(accordion(ArticleList));
