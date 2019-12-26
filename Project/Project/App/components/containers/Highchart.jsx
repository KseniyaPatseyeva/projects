import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../../actions/chartActions";

class Chart extends Component {

    componentDidMount() {
        this.props.getData('2019-05-25', '2019-05-29');
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
    getData: (start, end) => dispatch(getData(start, end))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
