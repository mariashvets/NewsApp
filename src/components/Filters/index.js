import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsDayPicker from './DayPicker/index';
import SelectFilter from './SelectFilter/index';
import {connect} from 'react-redux';

class Filters extends Component {

    static propTypes = {
        articles: PropTypes.array
    };

    constructor(){
        super()
    };

    render(){
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));


        return (<div>
                    <SelectFilter options={options}/>
                    <NewsDayPicker/>
                </div>);
    }
}

export default connect(({articles}) => ({articles}))(Filters);


