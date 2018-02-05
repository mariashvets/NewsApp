import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsDayPicker from './DayPicker/index';
import SelectFilter from './SelectFilter/index';
import {connect} from 'react-redux';

function Filters (props) {

        const options = props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (<div>
                    <SelectFilter options={options}/>
                    <NewsDayPicker/>
                </div>);
}

Filters.propTypes = {
    articles: PropTypes.array
};

export default connect(({articles}) => ({articles}))(Filters);


