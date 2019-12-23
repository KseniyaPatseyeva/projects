import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {Component} from "react";
import {decreaseCount, increaseCount, initCount} from "../actions/counterActions";
import {connect} from "react-redux";
import {getMessages} from "../actions/tableActions";
import {getData} from "../actions/chartActions";

const options = {
    chart: {
        type: 'spline'
    },
    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },
    title: {
        text: 'My chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        },
        {
            data: [2, 3, 4, 5, 3, 6]
        }
    ]
};

class Highchart extends Component{

    componentDidMount() {
        this.props.getData();
    }

    render(){
        return(
        <HighchartsReact highcharts={Highcharts} options={options} />
        )
    }
}


function mapStateToProps(state) {
}

const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Highchart);
