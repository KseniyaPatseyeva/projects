import React, {PureComponent} from "react";
import {Datepicker} from "../Datepicker";
import {connect} from "react-redux";
import {setEndDate, setStartDate} from "../../actions/dateAction";
import {getData} from "../../actions/fetchAction";
import {GET_DATA_ERROR, GET_DATA_SUCCESS} from "../../actions/actionTypes";
import {ErrorAlert} from "../ErrorAlert";

class DateField extends PureComponent {

    componentDidMount() {
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);

        this.props.getData(
            this.props.startDate.toISOString().slice(0, 10),
            this.props.endDate.toISOString().slice(0, 10)
        )
    }

    handleEndDateChange(date) {
        this.props.setEndDate(date);
        if(date) {
            this.props.getData(
                this.props.startDate.toISOString().slice(0, 10),
                date.toISOString().slice(0, 10)
            );
        }
    }

    handleStartDateChange(date) {
        this.props.setStartDate(date);
        if(date) {
            this.props.getData(
                date.toISOString().slice(0, 10),
                this.props.endDate.toISOString().slice(0, 10)
            );
        }
    }

    render() {
        if (this.props.error !== false) {
            return (
                <ErrorAlert/>
            )
        }

        return (
            <div className="w-25 date-field d-flex align-self-center">
                <div className="m-2">
                    <Datepicker
                        date={this.props.startDate}
                        handleChange={this.handleStartDateChange}
                        maxDate={this.props.endDate}
                    />
                </div>
                <div className="align-self-center">to</div>
                <div className="m-2">
                    <Datepicker
                        date={this.props.endDate}
                        handleChange={this.handleEndDateChange}
                        minDate={this.props.startDate}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        startDate: state.date.startDate,
        endDate: state.date.endDate,
        data: state.chart,
        error: state.chart.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date)),
        getData: (start, end) => dispatch(getData('stats/' + start + '/' + end, GET_DATA_SUCCESS, GET_DATA_ERROR))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateField)