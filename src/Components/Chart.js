import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Chart of increase cases',
        },
    },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December'];
const labels = ['2019', '2020', '2021', '2022'];


const Chart = (props) => {


    const data = {
        labels,
        datasets: [
            {
                label: 'Dengue',
                data: [props.Dengue2019+200, props.Dengue2020+300, props.Dengue2021, props.Dengue2022],
                borderColor: 'rgb(0,230,77)',
                backgroundColor: 'rgba(0,230,77,0.5)',
            },
            {
                label: 'Malaria',
                data: [props.Malaria2019-200, props.Malaria2020+100, props.Malaria2021, props.Malaria2022],
                borderColor: 'rgb(253 117 103)',
                backgroundColor: 'rgba(253 ,117 ,103, 0.5)',
            },
            {
                label: 'Tuberculosis',
                data: [props.Tuberculosis2019, props.Tuberculosis2020+500, props.Tuberculosis2021, props.Tuberculosis2022],
                borderColor: 'rgb(105 145 253)',
                backgroundColor: 'rgba(105 ,145 ,253 ,0.5)',
            },
            {
                label: 'Typhoid',
                data: [props.Typhoid2019+600, props.Typhoid2020+800, props.Typhoid2021, props.Typhoid2022],
                borderColor: 'rgb(253 246 105)',
                backgroundColor: 'rgba(253 ,246 ,105, 0.5)',
            },
            {
                label: 'Covid-19',
                data: [props.CommonCold2019, props.CommonCold2020+1000, props.CommonCold2021, props.CommonCold2022],
                borderColor: 'rgb(255 153 0)',
                backgroundColor: 'rgba(255 ,153, 0,0.5)',
            },
        ],
    };


    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}

export default Chart