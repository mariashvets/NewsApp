import React from 'react';
import PropTypes from 'prop-types';
import NewsDayPicker from './DayPicker/index';
import SelectFilter from './SelectFilter/index';
import {connect} from 'react-redux';

function Filters (props) {

        return (<div>
                    <SelectFilter/>
                    <NewsDayPicker/>
                </div>);
}

Filters.propTypes = {
    articles: PropTypes.object
};

export default connect(({articles}) => ({articles}))(Filters);


