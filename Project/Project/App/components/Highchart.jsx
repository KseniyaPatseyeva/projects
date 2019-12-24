import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions/chartActions";

class Highchart extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <HighchartsReact highcharts={Highcharts} options={this.props.data}/>
        )
    }
}


function mapStateToProps(state) {
    return {
        data: state.chart
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Highchart);
