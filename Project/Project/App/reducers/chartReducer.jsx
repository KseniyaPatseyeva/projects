import {GET_DATA_SUCCESS, GET_DATA_ERROR} from '../actions/actionTypes'

const initialState = {
    chart: {
        type: 'spline'
    },
    xAxis: {
        type: 'datetime',
        tickInterval: 7 * 24 * 3600 * 1000,
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            format: '{value:%Y-%b-%e}',
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [
        {
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
        text: 'Stats'
    },
    tooltip: {
        shared: true,
        crosshairs: true
    },
    series: [
        {
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2019, 11, 25)
        },
        {
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2019, 11, 25)
        }
    ],
    error: ''
};

function seriesArray(payload) {
    let dataArray = [];
    for (let i = 0; i < payload.length; i++) {
        dataArray.push({
            name: payload[i].label,
            data: payload[i].records.map(data => data.count)
        })
    }
    return dataArray
}

export default function chart(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_SUCCESS:

            return {
                ...state,
                series: seriesArray(action.payload)
            };
        case GET_DATA_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}