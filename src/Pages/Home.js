import React from 'react'
import '../CSS/Home.css'
import Map from './Map'
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';

const Home = (props) => {


const loaction = useLocation();


    const navigate = useNavigate();
    const naviateToMap = () => {
        navigate('/map');
    }

    const notOK = () => {
        navigate('/form');
    }

    console.log(loaction);

    return (
        <>
            <Navbar />

            <div className="heroDiv">
                <div className="detailDiv">
                    <p> A community of <strong>7,098,580 </strong>
                        people tracking infectious disease.</p>

                    <p className='how'>How are you feeling?</p>

                    <button className='btn btn-success m-3'><i className="fa fa-solid fa-thumbs-up"></i> Healthy, thanks!</button>
                    <button onClick={notOK} className='btn btn-danger'><i className="fa fa-solid fa-thumbs-down"></i> Not feeling well</button>

                </div>

                <div className="nichePatti">

                </div>

            </div>

            <div className="mapSec">
                <h2 className='text-center '>See disease cases in your locality</h2>
                <div className="row">
                    <div className="col-8 ">
                        <Map />
                        <i onClick={naviateToMap} className="fa fa-solid fa-expand expand"></i>
                    </div>
                </div>
            </div>

            <div className="whatIs">
                <div className="row">
                    <div className="col-5 whatIsImg">

                    </div>
                    <div className="col-7 whatIsInfo ">

                        <h1>WHAT IS IT</h1>

                        <h2 className='mb-5'>Flu and COVID-19 early <br />
                            warning system</h2>

                        <p className='mb-5'>Influenza and COVID-19 pose major risks to our health and wellbeing.
                            We've created a system that allows citizen scientists, like you, across North
                            America to securely and anonymously self-report symptoms.

                        </p>
                        <p> And since our users generally report before they see a healthcare provider,
                            we can see trends and the spread before local and national public health agencies.
                        </p>

                    </div>
                </div>
            </div>

            <div className="thirddiv">

                <h1>How Does It Work</h1>

                <div className="row">

                    <div className="col-4">
                        <img src="/Images/download.svg" alt="" width='44px' />
                        <h2>Contribute your health <br /> status</h2>
                        <p>If you’re living in North America, log on and let us know how you’re feeling one or more times per week.</p>

                    </div>

                    <div className="col-4">
                        <img src="/Images/download (1).svg" alt="" width='44px' />
                        <h2>See the impact on your <br /> community</h2>
                        <p>Check out if others in your community are reporting early warning signs of a COVID-19 or influenza outbreak.</p>

                    </div>

                    <div className="col-4">
                        <img src="/Images/download (2).svg" alt="" width='44px' />
                        <h2>CDC and others analyze <br /> data</h2>
                        <p>CDC and local public health agencies analyze the data for potential outbreaks and help predicate where COVID-19 and the flu might impact next.</p>

                    </div>
                </div>
            </div>

            <footer className='footer'>

                <div className="d-flex justify-content-around">
                    <div className=" loData">
                        <h1>856</h1>
                        <p>cases in your locality</p>
                    </div>

                    <div className=" loData">
                        <h1>165</h1>
                        <p>Malaria cases in your locality</p>
                    </div>

                    <div className=" loData">
                        <h1>190</h1>
                        <p>Covid-19 cases in your locality</p>
                    </div>

                    <div className=" loData">
                        <h1>215</h1>
                        <p>Dengue cases in your locality</p>
                    </div>

                    <div className=" loData">
                        <h1>196</h1>
                        <p>Typhoid cases in your locality</p>
                    </div>

                    <div className=" loData">
                        <h1>90</h1>
                        <p>Tuberculosis cases in your locality</p>
                    </div>
                </div>
                

            </footer>

        </>
    )
}

export default Home