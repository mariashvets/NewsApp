import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import App from './App/index';

class Root extends Component {

    static propTypes = {
        store: PropTypes.object
    };

    componentWillMount () {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Provider store={this.props.store} >
                    <App/>
                </Provider>
            </div>
        )

    }
}

export default Root;