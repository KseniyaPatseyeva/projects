import React from "react";
import DatePicker from "react-datepicker";

 import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}
