import React, {Component} from 'react';
import {addComment} from '../../AC';
import {connect} from 'react-redux';
import './style.css';

class AddCommentsForm extends Component {

    static propTypes = {
    };

    state = {
        user : '',
        text: '',
    };

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                user: <input type="text"
                             value={this.state.user}
                             className={this.getClassName('user')}
                             onChange={this.handleChange('user')}/>

                {/*<label htmlFor="comment"*/}
                       {/*className={this.showError()}>Check your form please once again</label>*/}

                comment: <input className={this.getClassName('text')}
                                value={this.state.text}
                                onChange={this.handleChange('text')}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {addComment, articleId}  = this.props;
        if(this.validate('user') && this.validate('text')) {
            addComment(this.state, articleId);

            this.setState({
                user: '',
                text: ''
            })
        }
    };

    validate = type => this.state[type].length && this.state[type].length > 10;

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : '';


    handleChange = (type) => (ev) => {
        const {value} = ev.target;

        if(value.length > 20) return;
        this.setState({
            [type]: value,
        })
    }
}

export default connect(null,{addComment})(AddCommentsForm);