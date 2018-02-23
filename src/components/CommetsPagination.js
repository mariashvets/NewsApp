import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment';
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';


class CommentsPage extends Component {

    render() {
        const {totalComments} = this.props;
        if(!totalComments) return <Loader/>;
        return (
            <div>
                {this.getCommentsItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentsItems (){
        const {comments = [], isLoading} = this.props;
        if(isLoading || !comments ) return <Loader/>;
        const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>);
        return <ul>{commentItems}</ul>;
    }

    getPaginator () {
        const {totalComments} = this.props;
        let elements = [];

        for(let i=1; i <= Math.floor(totalComments/5); i++){
            elements.push(<li key={i}><NavLink to={`/comments/${i}`} activeStyle={{color: 'red'}}>Page {i}</NavLink></li>)
        }
        return (<ul>{elements}</ul>);
    }

    checkandLoad({page, loadCommentsPage, comments, isLoading}){
        if(!comments && !isLoading) loadCommentsPage(page);
    }


    componentWillReceiveProps(nextProps){
        this.checkandLoad(nextProps);
    }

    componentWillMount() {
        this.checkandLoad(this.props);
    }

}

CommentsPage.propTypes = {};
CommentsPage.defaultProps = {};

export default connect((state, {page}) => {
    const {totalComments, pagination} = state.comments;
    return {
        totalComments,
        comments: pagination.getIn([page, 'ids']),
        isLoading: pagination.getIn([page, 'isLoading']),
    }
}, {loadCommentsPage})(CommentsPage);

