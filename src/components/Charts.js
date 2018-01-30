import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Charts extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    componentDidMount () {
        console.log('mounting');
    }

    componentWillReceiveProps () {
        console.log('updating');
    }

    setContainerRef = ref => {
        this.container = ref;

        if(!ref){
            //do some cleanup
        }

        //do some charting with d3 or else
    };

    render(){
        return <div ref = {this.setContainerRef}>
        </div>

    }

}

export default Charts;
