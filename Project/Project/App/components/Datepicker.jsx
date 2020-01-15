import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types'

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Datepicker = props => (
    <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={props.date}
        onChange={props.handleChange}
        minDate={props.minDate}
        maxDate={props.maxDate}
    />
)

Datepicker.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    handleChange: PropTypes.func.isRequired,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date)
}

export default Datepicker