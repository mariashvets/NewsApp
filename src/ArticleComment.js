import React,{Component} from 'react';


export default class ArticleComment extends Component {

    constructor () {
        super();
    }

    render () {
        const {comment} = this.props;

        return (
            <div>
                <div>User:{comment.user}</div>
                <div>{comment.text}</div>
            </div>
        )
    }
}