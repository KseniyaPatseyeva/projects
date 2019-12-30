import React from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let date = new Date();
        if (this.props.daysAgo) {
            date.setDate(date.getDate() - this.props.daysAgo);
        }
        this.setState({date: date })
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={this.state.date}
                onChange={this.handleChange}
            />
        );
    }
}
