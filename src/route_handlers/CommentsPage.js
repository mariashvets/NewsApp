import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment';
import Pagination from '../components/Pagination';
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux';

class CommentsPage extends Component {

    render() {
        const {comments, totalComments} = this.props;
        if(!comments) return null;
        return (
            <div>
                Comments Page Component
                <ul>
                    {comments.map(comment => <li key={comment.id}><Comment id={comment.id}/></li>)}
                </ul>
                <Pagination pages={Math.floor(totalComments/5)} path={'/comments'}/>
            </div>
        );
    }

    componentWillReceiveProps({page, loadCommentsPage, comments}){
        if(!comments) loadCommentsPage(page);
    }

    componentDidMount() {
        const {page, loadCommentsPage, comments} = this.props;
        if(!comments){
            loadCommentsPage(page);
        }
    }
}

CommentsPage.propTypes = {};
CommentsPage.defaultProps = {};

export default connect((state, ownProps) => {
    return {
        comments: state.comments.getIn(['loadedPages', `${ownProps.page}`]),
        totalComments: state.comments.get('totalComments')
    }
}, {loadCommentsPage})(CommentsPage);
