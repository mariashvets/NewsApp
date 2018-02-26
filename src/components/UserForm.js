import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {

    static propTypes = {
        username: PropTypes.strng,
        onChange: PropTypes.func
    };

    render(){
        return <div>
            <form>
                <input value={this.props.value} onChange={this.handleChange}></input>
            </form>
        </div>

    }

    handleChange = ev => {
        const {onChange} = this.props;
        if(!onChange) return;
        onChange(ev.target.value);
    };

}


export default UserForm;
