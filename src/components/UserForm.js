import React, {Component} from 'react';

class UserForm extends Component {

    static propTypes = {
    };

    state = {
        name: ''
    };

    handleChange = ev => {
        if(ev.target.value.length > 10) return this.setState({ name: ''});
        this.setState ({
            name: ev.target.value
        })

    };

    render(){
        return <div>
            <form>
                <input value={this.state.name} onChange={this.handleChange}></input>
            </form>
        </div>

    }
}


export default UserForm;
