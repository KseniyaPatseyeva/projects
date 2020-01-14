import React, {PureComponent} from "react";
import {Datepicker} from "../Datepicker";
import {connect} from "react-redux";
import {setEndDate, setStartDate} from "../../actions/dateAction";
import {getData} from "../../actions/fetchAction";
import {GET_DATA_ERROR, GET_DATA_SUCCESS} from "../../actions/actionTypes";
import {ErrorAlert} from "../ErrorAlert";

class DateField extends PureComponent {

    constructor(props) {
        super(props);
        let endDate = new Date();
        this.props.setEndDate(new Date());
        let startDate = new Date;
        startDate.setDate(startDate.getDate() - 30);
        this.props.setStartDate(startDate);
        this.props.getData(startDate.toLocaleDateString("fr-CA"),
            endDate.toLocaleDateString("fr-CA"));
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
                    <Datepicker date={this.props.endDate} handleChange={date => {
                        this.props.setEndDate(date);
                        if (this.props.startDate)
                            this.props.getData(this.props.startDate.toLocaleDateString("fr-CA"),
                                date.toLocaleDateString("fr-CA"));
                    }} minDate={this.props.startDate}/>
                </div>
                <div className="align-self-center">to</div>
                <div className="m-2">
                    <Datepicker date={this.props.startDate} handleChange={date => {
                        this.props.setStartDate(date);
                        if (this.props.startDate)
                            this.props.getData(date.toLocaleDateString("fr-CA"),
                                this.props.endDate.toLocaleDateString("fr-CA"));
                    }} maxDate={this.props.endDate}/>
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