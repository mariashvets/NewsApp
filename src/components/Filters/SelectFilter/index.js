import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {};

    constructor(){
        super()
    }

    state =  {
        selection: null
    };

    render(){
        return (<div>
                <Select options={this.props.options} value={this.state.selection} onChange={this.handleSelectionChange} multi/>
            </div>);
    }

    handleSelectionChange = selection => {this.setState({selection})};
}

export default SelectFilter;


