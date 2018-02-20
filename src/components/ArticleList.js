import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filteredArticleSelector} from '../selectors';
import {loadAllArticles} from '../AC';
import Loader from "./Loader";
import {NavLink} from 'react-router-dom';

class ArticleList  extends Component {

    componentDidMount() {
        const {isLoading, loaded, loadAllArticles} = this.props;
        if( !isLoading && !loaded ) loadAllArticles();
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        match: PropTypes.object.isRequired
    };

    render(){
        const {articles,  isLoading, match} = this.props;
        if(isLoading) return <Loader/>;

        const elements = articles.map(article => {

            return <li key={article.id} ref={article.id}>
                <NavLink to={`${match.url}/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</NavLink>
                {/*<Article article={article}*/}
                         {/*isOpen={article.id === openItemId}*/}
                         {/*toggleOpen={toggleItem(article.id)}/>*/}
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

}, {loadAllArticles})((ArticleList));
