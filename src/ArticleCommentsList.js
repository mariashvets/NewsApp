import React,{Component} from 'react';
import ArticleComment from './ArticleComment';


export default class ArticleCommentsList extends Component {

    constructor(){
        super();

        this.state  = {
            isOpen: false
        }
    }

    render() {
        const comments = this.props.comments.map((comment) => {
            return <li key={comment.id}>
                <ArticleComment  comment={comment}/>
            </li>
        });
        return (
            <div>
                <h3 onClick={this.toggleOpen}>{this.getCommentsTitle()} комментарии</h3>
                {this.getComments(comments)}
            </div>
        )
    }

    getComments(comments) {
        return this.state.isOpen &&
            <ul>{comments}</ul>
    }

    getCommentsTitle(){
        return this.state.isOpen ? "Скрыть" : "Показать";
    }


    toggleOpen = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }
}

