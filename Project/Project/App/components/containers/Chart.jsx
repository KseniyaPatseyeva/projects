import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../../actions/fetchAction";
import {GET_DATA_ERROR, GET_DATA_SUCCESS} from "../../actions/actionTypes";

class Chart extends Component {

    componentDidMount() {
        this.props.getData('2019-12-25', '2019-12-30');
    }

    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={this.props.data}/>
        )
    }
}

function getDateFromToday() {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

<<<<<<< HEAD
    return yyyy + '-' + mm + '-' + dd;
=======
    return  yyyy + '-' + mm + '-' + dd;
>>>>>>> develop
}

function mapStateToProps(state) {
    return {
        data: state.chart
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: (start, end) => dispatch(getData('stats/' + start + '/' + end, GET_DATA_SUCCESS, GET_DATA_ERROR))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
