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
            name: 'Arrived',
            data: [],
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2019, 5, 25)
        },
        {
            name: 'Left',
            data: [],
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2019, 5, 25)
        }
    ],
    error: ''
};

export default function chart(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                series: [
                    {
                        data: action.payload[0].records.map(data => data.count)
                    },
                    {
                        data: action.payload[1].records.map(data => data.count)
                    }
                ]
            };
        case GET_DATA_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}