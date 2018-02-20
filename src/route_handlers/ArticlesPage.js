import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticlesList from '../components/ArticleList';
import Article from '../components/Article';
import {Route} from 'react-router-dom';

class ArticlesPage extends Component {

    static propTypes = {
        //from react-router
        match: PropTypes.object.isRequired
    };
    render() {

        const {match} = this.props;
        return (
            <div>
                <ArticlesList match={match}/>
                <Route path={`${match.url}/:id`} render = {this.getArticle}/>
            </div>
        );
    }

    getArticle = ({match}) => {
        return <Article id={match.params.id} key={match.params.id} isOpen/>;
    }
}

ArticlesPage.propTypes = {};
ArticlesPage.defaultProps = {};

export default ArticlesPage;
