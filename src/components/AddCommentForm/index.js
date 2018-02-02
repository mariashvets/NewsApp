import React, {Component} from 'react';
import './style.css';

class AddCommentsForm extends Component {

    static propTypes = {
    };

    state = {
        user : '',
        text: '',
        valid: 'valid',
        errorText: ''
    };

    handleChangeUserName = (ev) => {
        this.setState({
            user: ev.target.value
        })
    };

    handleChangeCommentText = (ev) => {
        this.validateCommentText(ev.target.value);
    };

    submitComment = (ev) => {
        if(this.validateUserName(this.state.user) && this.validateCommentText(this.state.text)) {
            alert('Your form was submitted!');
            return;
        }
        alert ('Something went wrong. Check your form.');
    };

    validateCommentText = (text) => {
        if(text.length < 10) {
            this.setState({ text: text, errorText: 'Your comment should include more than 10 symbols.', valid: 'error'});
            return false;
        }

        if(text.length > 20) {
            this.setState({ errorText: 'Only 20 symbols allowed.', valid: 'error'});
            return false;
        }

        this.setState({text: text, valid: 'valid'});
        return true;
    };

    validateUserName = (userName) => {
        if(userName !== '') return true;
    };

    render(){
        return <div>
            <form>
                <input type="text" placeholder="User name" value={this.state.user} onChange={this.handleChangeUserName}/>
                <label htmlFor="comment" className={this.state.valid}> {this.state.errorText}</label>
                <textarea placeholder="Comment text" name="comment" className={this.state.valid} value={this.state.text} onChange={this.handleChangeCommentText}/>
                <button type="button" onClick={this.submitComment}>Submit</button>
            </form>
        </div>

    }
}

export default AddCommentsForm;