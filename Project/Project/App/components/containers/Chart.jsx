import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {Component, PureComponent} from "react";
import {connect} from "react-redux";

class Chart extends PureComponent {
    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={this.props.data}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.chart,
        startDate: state.date.startDate,
        endDate: state.date.endDate
    }
}

export default connect(mapStateToProps)(Chart);
