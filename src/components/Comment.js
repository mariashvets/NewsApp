import React from 'react';
import PropTypes from 'prop-types';

export default function Comment ({comment}){
        return (
            <div>
                <div>User:{comment.user}</div>
                <div>{comment.text}</div>
            </div>
        )
}

Comment.PropTypes = {
    comment : PropTypes.string.isRequired
};