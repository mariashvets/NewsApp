import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeDateRange} from '../../../AC';


class NewsDayPicker extends  Component {

    static defaultProps = {
        numberOfMonths: 2,
    };

    constructor() {
        super();
        this.state = this.getInitialState();
    };

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    };

    handleDayClick = day => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    handleResetClick = () => {
        this.setState(this.getInitialState());
    };

    render() {
        const { from, to } = this.props.range;
        const modifiers = { start: from, end: to };

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
                            {from &&
                            to && (
                                <button className="link" onClick={this.handleResetClick}>
                                    Reset
                                </button>
                            )}
                        </p>

                        <DayPicker
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                </div>
            </div>
        )
    }
}

export default connect((state => ({range: state.filters.dateRange})),{changeDateRange})(NewsDayPicker);










