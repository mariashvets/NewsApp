import React, {Component} from "react";
import CommentsList from "../CommentsList";
import Loader from '../Loader';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../../AC/';


class Article extends Component {

    render(){
        const {toggleOpen, article} = this.props;
        if (!article) return null;
        return (
            <section>
                <h2 onClick={toggleOpen}>{article.title} </h2>
                <a href="#" onClick={this.handleDelete}>delete me</a>
                <CSSTransitionGroup transitionName="article"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        );
    }

    componentWillUpdate(){
        console.log('----', 'updating');
    }

    componentDidMount() {
        this.checkAndLoad(this.props);
    }


    componentWillReceiveProps(nextProps) {
        this.checkAndLoad(nextProps);
    }

    checkAndLoad ({article, loadArticle, id}) {
        if(!article || (!article.text && !article.loading))  loadArticle(id);
    };

    getBody() {
        const {isOpen, article} = this.props;

        if(!isOpen) return null;
        if(article.loading) return <Loader />;
        return (<div>
                {article.text}
                <CommentsList article = {article} />
            </div>)
    }

    handleDelete = ev => {
        ev.preventDefault();
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }
}

Article.PropTypes = {
    id: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired,
};

export default connect((state, {id}) => {
    return {
        article: state.articles.getIn(['entities',id])
    }
}, {deleteArticle, loadArticle})(Article);

