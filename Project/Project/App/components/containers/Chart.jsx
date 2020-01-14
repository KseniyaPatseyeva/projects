import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, {PureComponent} from "react";
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
        data: state.chart
    }
}

export default connect(mapStateToProps)(Chart);
