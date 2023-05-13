import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Chart from '../Components/Chart'
import '../CSS/Dashboard.css'
import FutureChart from '../Components/FutureChart';

const Dashboard = () => {



    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Dengue', 'Malaria', 'Typhiod', 'Covid-19', 'Tuberculosis', 'Uninfected'],
        datasets: [
            {
                label: '# of Votes',
                data: [19, 12, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total infected population',
            },
        },
    };

    const data1 = [350, 693, 560, 561, 201, 102, 97];
    const data2 = [624, 510, 897, 750, 620, 600, 480];
    const data3 = [102, 203, 410, 500, 300, 250, 210];
    const data4 = [97, 85, 56, 36, 40, 35, 30];
    const data5 = [703, 1002, 1420, 750, 960, 1102];

    return (
        <>

            <h1 className='dashHeAD mx-auto mt-5'>Reports of your city</h1>

            <div className="d-flex justify-content-around mt-5">

                <div className="chart mt-5">
                    <Chart />
                </div>

                <div className="chartp p-5 mt-5">
                    <Pie data={data} options={options} />
                </div>

            </div>

            <div className="futureP">

                <h1 className='dashHeAD mx-auto mt-5'>Future Prediction of the disease</h1>


                <div className="chart mx-auto ">
                    <FutureChart data={data1} disease={'dengue'} />
                </div>

                <div className="chart mx-auto">
                    <FutureChart data={data2} disease={'malaria'} />
                </div>

                <div className="chart mx-auto">
                    <FutureChart data={data3} disease={'typhiod'} />
                </div>

                <div className="chart mx-auto">
                    <FutureChart data={data4} disease={'tuberculosis'} />
                </div>

                <div className="chart mx-auto">
                    <FutureChart data={data5} disease={'covid-19'} />
                </div>

            </div>


        </>
    )
}

export default Dashboard