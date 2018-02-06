import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeDateRange} from '../../../AC';


class NewsDayPicker extends  Component {

    handleDayClick = day => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    // handleResetClick = () => {
    //     const {changeDateRange, range} = this.props;
    //     changeDateRange(DateUtils.addDayToRange(null, range));
    // };
    //TODO: implement reset click logic for dateRange;

    render() {
        const { from, to } = this.props.range;
        return(
            <div>
                <div className="RangeExample">
                    <p>
                            {!from && !to && 'Please select the first day.'}
                            {from && !to && 'Please select the last day.'}
                            {from &&
                            to &&
                            `Selected from ${from.toLocaleDateString()} to
                        ${to.toLocaleDateString()}`}{' '}
                        </p>

                        <DayPicker
                            className="Selectable"
                            selectedDays={[from, { from, to }]}
                            onDayClick={this.handleDayClick}
                        />
                </div>
            </div>
        )
    }
}

export default connect((state => ({range: state.filters.dateRange})),{changeDateRange})(NewsDayPicker);










