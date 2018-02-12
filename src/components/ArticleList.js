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
        const elements = Object.keys(articles).map(key => {

            return <li key={key} ref={key}>
                <Article article={articles[key]}
                         isOpen={key === openItemId}
                         toggleOpen={toggleItem(key)}/>
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
