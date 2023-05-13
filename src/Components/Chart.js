

import React from 'react';
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
import { faker } from '@faker-js/faker'

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dengue',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(0,230,77)',
            backgroundColor: 'rgba(0,230,77,0.5)',
        },
        {
            label: 'Malaria',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(253 117 103)',
            backgroundColor: 'rgba(253 ,117 ,103, 0.5)',
        },
        {
            label: 'Tuberculosis',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(105 145 253)',
            backgroundColor: 'rgba(105 ,145 ,253 ,0.5)',
        },
        {
            label: 'Typhoid',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(253 246 105)',
            backgroundColor: 'rgba(253 ,246 ,105, 0.5)',
        },
        {
            label: 'Covid-19',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255 153 0)',
            backgroundColor: 'rgba(255 ,153, 0,0.5)',
        },
    ],
};

const Chart = () => {
    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}

export default Chart