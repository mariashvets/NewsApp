import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

 function CommentsList (props) {

     const {isOpen, toggleOpen} = props;

    // static defaultProps = {
    //     comments :[]
    // };

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
export default toggleOpen(CommentsList);


