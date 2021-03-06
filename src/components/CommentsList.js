import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddCommentsForm from './AddCommentForm/index';
import Loader from './Loader';
import LocalizedText from './LocalizedText';
import toggleOpen from '../decorators/toggleOpen';
import {loadArticleComments} from "../AC";
import {connect} from 'react-redux';


class CommentsList extends Component  {

    static contextTypes = {
       store:  PropTypes.object,
       router: PropTypes.object
    };

    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render () {
        console.log('context', this.context);
        const {isOpen, toggleOpen, article} = this.props;

        const title = isOpen ? "hide comments" : "show comments";

        return (
            <div>
                <h3 onClick={toggleOpen}><LocalizedText>{title}</LocalizedText></h3>
                <AddCommentsForm articleId= {article.id}/>
                {this.getComments()}
            </div>
        );
    }

    componentWillReceiveProps({article, isOpen, loadArticleComments}) {
        if(isOpen && !article.loadedComments && !article.loadingComments) loadArticleComments(article.id);
    }

    getComments() {
        const {article : { loadedComments, loadingComments, id, comments = [] }, isOpen} = this.props;

        if(!isOpen) return null;
        if(loadingComments) return <Loader/>;
        if(!loadedComments) return null;

        if(!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
        );
    }
}

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentsList));


