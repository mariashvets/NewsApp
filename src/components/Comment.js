import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors';

function Comment ({comment}){
        return (
            <div>
                <div>User:{comment.user}</div>
                <div>{comment.text}</div>
            </div>
        )
}

Comment.propTypes = {
    // comment : PropTypes.string.isRequired
    id: PropTypes.number.isRequired,
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    })
};


function createMapStateToProps() {
    const commentSelector = commentSelectorFactory();
    return function mapStateToProps (state, ownProps)  {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}
export default connect(createMapStateToProps)(Comment);
