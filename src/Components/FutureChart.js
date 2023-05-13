import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

const FutureChart = ({disease,data}) => {

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
    );

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const dataset = {
        labels,
        datasets: [
            {
                type: 'line',
                label: 'Rise in cases',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: data,
            },
            {
                type: 'bar',
                label: 'total cases',
                backgroundColor: 'rgb(75, 192, 192)',
                data: data,
                borderColor: 'white',
                borderWidth: 2,
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Future Prediction for ${disease} `,
            },
        },
    };


    return (
        <>
            <Chart type='bar' data={dataset} options={options} />
        </>
    )
}

export default FutureChart