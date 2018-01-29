import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

 function CommentsList (props) {
    const {isOpen, toggleOpen} = props;

    const title = isOpen ? "Hide comments" : "Show comments";

    return (
        <div>
            <h3 onClick={toggleOpen}>{title}</h3>
            {getComments(props)}
        </div>
    );

    function getComments({isOpen, comments = []}) {

        if(!isOpen) return null;

        if(!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    }
}

CommentsList.PropTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default toggleOpen(CommentsList);


