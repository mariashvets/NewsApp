import React, {Component} from "react";
import CommentsList from "../CommentsList";
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';
import {connect} from 'react-redux';
import {deleteArticle} from '../../AC/';



class Article extends Component {

    render(){
        const {toggleOpen, article} = this.props;

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

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    getBody() {
        const {isOpen, article} = this.props;
        return isOpen &&
            <div>
                {article.text}
                <CommentsList comments = {article.comments}/>
            </div>
    }

    handleDelete = ev => {
        ev.preventDefault();
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }
}

Article.PropTypes = {
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default connect(null, {deleteArticle})(Article);

