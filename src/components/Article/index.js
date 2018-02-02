import React, {Component} from "react";
import CommentsList from "../CommentsList";
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';



class Article extends Component {

    render(){
        const {toggleOpen, article} = this.props;

        return (
            <section>
                <h2 onClick={toggleOpen}>{article.title} </h2>
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
}

Article.PropTypes = {
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default Article;

