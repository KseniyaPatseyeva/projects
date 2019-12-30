import React, {PureComponent} from "react";
import {Datepicker} from "../Datepicker";
import {connect} from "react-redux";
import {setEndDate, setStartDate} from "../../actions/dateAction";

class DateField extends PureComponent {

    componentDidMount() {
        this.props.setEndDate(new Date());
        let date = new Date;
        date.setDate(date.getDate() - 30);
        this.props.setStartDate(date);
    }


    render() {
        return (
            <div className="d-flex flex-row align-self-center">
                <div className="m-2">
                    <Datepicker date={this.props.startDate} handleChange={date => {
                        this.props.setStartDate(date);
                    }} maxDate={this.props.endDate}/>
                </div>
                <div className="m-2">
                    <Datepicker date={this.props.endDate} handleChange={date => {
                        this.props.setEndDate(date);
                    }} minDate={this.props.startDate}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        startDate: state.date.startDate,
        endDate: state.date.endDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateField)