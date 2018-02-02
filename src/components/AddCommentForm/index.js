import React, {Component} from 'react';
import './style.css';

class AddCommentsForm extends Component {

    static propTypes = {
    };

    state = {
        user : '',
        comment: '',
    };

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                user: <input type="text"
                             value={this.state.user}
                             className={this.getClassName('user')}
                             onChange={this.handleChange('user')}/>

                {/*<label htmlFor="comment"*/}
                       {/*className={this.state.valid}> {this.state.errorText}</label>*/}

                comment: <input className={this.getClassName('comment')}
                                value={this.state.comment}
                                onChange={this.handleChange('comment')}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.setState({
            user: '',
            comment: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : '';

    handleChange = (type) => (ev) => {
        const {value} = ev.target;

        if(value.length > 20) return;
        this.setState({
            [type]: value,
        })
    }



}

export default AddCommentsForm;