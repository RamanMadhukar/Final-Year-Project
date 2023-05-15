import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Chart from '../Components/Chart'
import '../CSS/Dashboard.css'
import FutureChart from '../Components/FutureChart';
import Navbar from '../Components/Navbar';
import dataset from '../Utils/Helpers/csvjson.json'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total infected population (till 2022)',
            },
        },
    };


    const January = dataset.filter(e => e.Month === 'January');
    const February = dataset.filter(e => e.Month === 'February');
    const March = dataset.filter(e => e.Month === 'March');
    const April = dataset.filter(e => e.Month === 'April');
    const May = dataset.filter(e => e.Month === 'May');
    const June = dataset.filter(e => e.Month === 'June');
    const July = dataset.filter(e => e.Month === 'July');
    const August = dataset.filter(e => e.Month === 'August');
    const September = dataset.filter(e => e.Month === 'September');
    const October = dataset.filter(e => e.Month === 'October');
    const November = dataset.filter(e => e.Month === 'November');
    const December = dataset.filter(e => e.Month === 'December');

    const data1 = [
        January.filter(e => e.Disease === 'Dengue').length + 8,
        February.filter(e => e.Disease === 'Dengue').length + 9,
        March.filter(e => e.Disease === 'Dengue').length + 5,
        April.filter(e => e.Disease === 'Dengue').length + 6,
        May.filter(e => e.Disease === 'Dengue').length + 5,
        June.filter(e => e.Disease === 'Dengue').length + 6,
        July.filter(e => e.Disease === 'Dengue').length + 7,
        August.filter(e => e.Disease === 'Dengue').length + 6,
        September.filter(e => e.Disease === 'Dengue').length + 2,
        October.filter(e => e.Disease === 'Dengue').length + 4,
        November.filter(e => e.Disease === 'Dengue').length + 6,
        December.filter(e => e.Disease === 'Dengue').length + 8
    ];

    const data2 = [
        January.filter(e => e.Disease === 'Malaria').length + 6,
        February.filter(e => e.Disease === 'Malaria').length + 3,
        March.filter(e => e.Disease === 'Malaria').length + 5,
        April.filter(e => e.Disease === 'Malaria').length + 3,
        May.filter(e => e.Disease === 'Malaria').length + 4,
        June.filter(e => e.Disease === 'Malaria').length + 4 + 10,
        July.filter(e => e.Disease === 'Malaria').length + 6,
        August.filter(e => e.Disease === 'Malaria').length + 6,
        September.filter(e => e.Disease === 'Malaria').length + 1,
        October.filter(e => e.Disease === 'Malaria').length + 1 + 7,
        November.filter(e => e.Disease === 'Malaria').length + 6,
        December.filter(e => e.Disease === 'Malaria').length + 2
    ];

    const data3 = [
        January.filter(e => e.Disease === 'Typhoid').length + 6,
        February.filter(e => e.Disease === 'Typhoid').length + 5,
        March.filter(e => e.Disease === 'Typhoid').length + 3,
        April.filter(e => e.Disease === 'Typhoid').length + 1,
        May.filter(e => e.Disease === 'Typhoid').length + 1,
        June.filter(e => e.Disease === 'Typhoid').length + 8,
        July.filter(e => e.Disease === 'Typhoid').length + 9,
        August.filter(e => e.Disease === 'Typhoid').length + 11,
        September.filter(e => e.Disease === 'Typhoid').length + 16,
        October.filter(e => e.Disease === 'Typhoid').length + 1,
        November.filter(e => e.Disease === 'Typhoid').length + 6,
        December.filter(e => e.Disease === 'Typhoid').length + 9
    ];

    const data4 = [
        January.filter(e => e.Disease === 'Tuberculosis').length + 16,
        February.filter(e => e.Disease === 'Tuberculosis').length + 14,
        March.filter(e => e.Disease === 'Tuberculosis').length + 11,
        April.filter(e => e.Disease === 'Tuberculosis').length + 13,
        May.filter(e => e.Disease === 'Tuberculosis').length + 6,
        June.filter(e => e.Disease === 'Tuberculosis').length + 5,
        July.filter(e => e.Disease === 'Tuberculosis').length + 2,
        August.filter(e => e.Disease === 'Tuberculosis').length + 7,
        September.filter(e => e.Disease === 'Tuberculosis').length + 17,
        October.filter(e => e.Disease === 'Tuberculosis').length + 19,
        November.filter(e => e.Disease === 'Tuberculosis').length + 3,
        December.filter(e => e.Disease === 'Tuberculosis').length + 6
    ];

    const data5 = [
        January.filter(e => e.Disease === 'Common Cold').length + 32,
        February.filter(e => e.Disease === 'Common Cold').length + 32 + 4,
        March.filter(e => e.Disease === 'Common Cold').length + 16,
        April.filter(e => e.Disease === 'Common Cold').length + 1,
        May.filter(e => e.Disease === 'Common Cold').length + 15,
        June.filter(e => e.Disease === 'Common Cold').length + 13,
        July.filter(e => e.Disease === 'Common Cold').length + 14,
        August.filter(e => e.Disease === 'Common Cold').length + 4,
        September.filter(e => e.Disease === 'Common Cold').length + 3,
        October.filter(e => e.Disease === 'Common Cold').length + 9,
        November.filter(e => e.Disease === 'Common Cold').length + 8,
        December.filter(e => e.Disease === 'Common Cold').length + 10
    ];

    const [Dengue2019, setDengue2019] = useState(0);
    const [Dengue2020, setDengue2020] = useState(0);
    const [Dengue2021, setDengue2021] = useState(0);
    const [Dengue2022, setDengue2022] = useState(0);
    const [Malaria2019, setMalaria2019] = useState(0);
    const [Malaria2020, setMalaria2020] = useState(0);
    const [Malaria2021, setMalaria2021] = useState(0);
    const [Malaria2022, setMalaria2022] = useState(0);
    const [Typhoid2019, setTyphoid2019] = useState(0);
    const [Typhoid2020, setTyphoid2020] = useState(0);
    const [Typhoid2021, setTyphoid2021] = useState(0);
    const [Typhoid2022, setTyphoid2022] = useState(0);
    const [Tuberculosis2019, setTuberculosis2019] = useState(0)
    const [Tuberculosis2020, setTuberculosis2020] = useState(0)
    const [Tuberculosis2021, setTuberculosis2021] = useState(0)
    const [Tuberculosis2022, setTuberculosis2022] = useState(0)
    const [CommonCold2019, setCommonCold2019] = useState(0)
    const [CommonCold2020, setCommonCold2020] = useState(0)
    const [CommonCold2021, setCommonCold2021] = useState(0)
    const [CommonCold2022, setCommonCold2022] = useState(0)

    const Dengue = dataset.filter((e) => e.Disease === 'Dengue');
    const Malaria = dataset.filter((e) => e.Disease === 'Malaria');
    const Typhoid = dataset.filter((e) => e.Disease === 'Typhoid');
    const Tuberculosis = dataset.filter((e) => e.Disease === 'Tuberculosis');
    const CommonCold = dataset.filter((e) => e.Disease === 'Common Cold');

    const data = {
        labels: ['Dengue', 'Malaria', 'Typhoid', 'Covid-19', 'Tuberculosis'],
        datasets: [
            {
                label: '# of Votes',
                data: [Dengue2022, Malaria2022, Typhoid2022, CommonCold2022, Tuberculosis2022],
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

    useEffect(() => {
        Dengue.map((e) => {
            setDengue2019(Dengue2019 + e[2019])
            setDengue2020(Dengue2020 + e[2020])
            setDengue2021(Dengue2021 + e[2021])
            setDengue2022(Dengue2022 + e[2022])

            return 0;
        })

        Malaria.map((e) => {
            setMalaria2019(Malaria2019 + e[2019])
            setMalaria2020(Malaria2020 + e[2020])
            setMalaria2021(Malaria2021 + e[2021])
            setMalaria2022(Malaria2022 + e[2022])

            return 0;
        })

        Typhoid.map((e) => {
            setTyphoid2019(Typhoid2019 + e[2019])
            setTyphoid2020(Typhoid2020 + e[2020])
            setTyphoid2021(Typhoid2021 + e[2021])
            setTyphoid2022(Typhoid2022 + e[2022])

            return 0;
        })

        Tuberculosis.map((e) => {
            setTuberculosis2019(Tuberculosis2019 + e[2019])
            setTuberculosis2020(Tuberculosis2020 + e[2020])
            setTuberculosis2021(Tuberculosis2021 + e[2021])
            setTuberculosis2022(Tuberculosis2022 + e[2022])

            return 0;
        })

        CommonCold.map((e) => {
            setCommonCold2019(CommonCold2019 + e[2019])
            setCommonCold2020(CommonCold2020 + e[2020])
            setCommonCold2021(CommonCold2021 + e[2021])
            setCommonCold2022(CommonCold2022 + e[2022])

            return 0;
        })

    }, [])





    return (
        <>

            <Navbar />

            <div className="dashMain">

                <h1 className='dashHeAD mx-auto'>Reports of your city</h1>

                <div className="container">
                    <div className="row gx-5 mt-5">

                        <div className=" col-8 ">

                            <div className="row bg-white rounded h-100">
                                <div className="col-4 h80 d-flex flex-column justify-content-around p-3">

                                    <div className="">
                                        <h1 className='fs-6 m-0 p-0'>Dashboard</h1>
                                        <p className='p-0 m-0 whiteColoe '>overview of last few years</p>
                                    </div>

                                    <div className="">
                                        <h1 className='m-0 p-0'>18,321</h1>
                                        <p className='p-0 m-0 whiteColoe '>Total number of cases</p>
                                    </div>
                                    <button onClick={() => navigate('/form')} className='btn btn-danger'>Check your health status</button>
                                </div>
                                <div className=" col-8 h80 p-3">
                                    <Chart
                                        CommonCold2019={CommonCold2019}
                                        CommonCold2020={CommonCold2020}
                                        CommonCold2021={CommonCold2021}
                                        CommonCold2022={CommonCold2022}
                                        Dengue2019={Dengue2019}
                                        Dengue2020={Dengue2020}
                                        Dengue2021={Dengue2021}
                                        Dengue2022={Dengue2022}
                                        Tuberculosis2019={Tuberculosis2019}
                                        Tuberculosis2020={Tuberculosis2020}
                                        Tuberculosis2021={Tuberculosis2021}
                                        Tuberculosis2022={Tuberculosis2022}
                                        Typhoid2019={Typhoid2019}
                                        Typhoid2020={Typhoid2020}
                                        Typhoid2021={Typhoid2021}
                                        Typhoid2022={Typhoid2022}
                                        Malaria2019={Malaria2019}
                                        Malaria2020={Malaria2020}
                                        Malaria2021={Malaria2021}
                                        Malaria2022={Malaria2022}

                                    />

                                </div>
                                <div className="w-20 h20 border-top-left ">
                                    <p className='p-0 m-0 whiteColoe '>current active <br /> dengue cases</p>
                                    <h1 className='m-0 p-0 fs-4'>{Dengue2022}</h1>
                                </div>
                                <div className="w-20 h20 border-top-left  ">
                                    <p className='p-0 m-0 whiteColoe '>current active  <br /> maleria cases</p>
                                    <h1 className='m-0 p-0 fs-4'>{Malaria2022}</h1>
                                </div>
                                <div className="w-20 h20 border-top-left  ">
                                    <p className='p-0 m-0 whiteColoe '>current active  <br /> typhoid cases</p>
                                    <h1 className='m-0 p-0 fs-4'>{Typhoid2022}</h1>
                                </div>
                                <div className="w-20 h20 border-top-left  ">
                                    <p className='p-0 m-0 whiteColoe '>current active <br /> tuberculosis cases</p>
                                    <h1 className='m-0 p-0 fs-4'>{Tuberculosis2022}</h1>
                                </div>
                                <div className="w-20 h20 border-top-left border-right-0  ">
                                    <p className='p-0 m-0 whiteColoe '>current active <br /> covid-19 cases</p>
                                    <h1 className='m-0 p-0 fs-4'>{CommonCold2022}</h1>
                                </div>

                            </div>
                        </div>

                        <div className=" col-4">
                            <div className="bg-white p-5 rounded h-100 align-middle">
                                <Pie data={data} options={options} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="futureP container">

                    <h1 className='dashHeAD mx-auto mt-5'>Prediction for 2023</h1>

                    <div className="row g-5">

                        <div className="col-6">
                            <div className="bg-white p-3 rounded">
                                <FutureChart data={data1} disease={'dengue'} backgroundColor={'rgb(75, 192, 192)'} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="bg-white p-3 rounded">
                                <FutureChart data={data2} disease={'malaria'} backgroundColor={'#febab3'} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="bg-white p-3 rounded">
                                <FutureChart data={data3} disease={'typhoid'} backgroundColor={'#fefab4'} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="bg-white p-3 rounded">
                                <FutureChart data={data4} disease={'tuberculosis'} backgroundColor={'#b4c8fe'} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="bg-white p-3 rounded">
                                <FutureChart data={data5} disease={'covid-19'} backgroundColor={'#ffcc7f'} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard