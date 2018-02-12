import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddCommentsForm from './AddCommentForm/index';
import toggleOpen from '../decorators/toggleOpen';


 function CommentsList (props) {
    const {isOpen, toggleOpen, articleId} = props;

    const title = isOpen ? "Hide comments" : "Show comments";

    return (
        <div>
            <h3 onClick={toggleOpen}>{title}</h3>
            <AddCommentsForm articleId= {articleId}/>
            {getComments(props)}
        </div>
    );

    function getComments({isOpen, comments = []}) {

        if(!isOpen) return null;

        if(!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
        );
    }
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default toggleOpen(CommentsList);


