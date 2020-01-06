import React from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class Datepicker extends React.Component {
    render() {
        return (
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={this.props.date}
                onChange={this.props.handleChange}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
            />
        );
    }
}
