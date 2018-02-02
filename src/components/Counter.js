import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC/index';

class Counter extends Component {

    static propTypes = {
        count: PropTypes.number
    };

    render(){
        return (
            <h1>
                {this.props.count}
                <a href="#" onClick={this.handleClick}>Increment me!</a>
            </h1>
        )
    }


    handleClick = (ev) => {
        ev.preventDefault();

        //Создаст объект action, но и задиспатчит сразу
        // т.е строка по факту равна следующему коду
        // const action = increment();
        // console.log(action);
        // this.props.dispatch(action);

        const {increment} = this.props;
       increment();

    }
}

function mapStateToProps (storeState) {
    return {
        count: storeState.counter
    }
}

export default connect(mapStateToProps, {increment})(Counter);