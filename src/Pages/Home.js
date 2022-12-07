import React from 'react'
import '../CSS/Home.css'
import Map from './Map'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();


    const naviateToMap = () => {
        navigate('/map');
    }

    return (
        <>
            <div className="navBar position-fixed">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="vw-100 d-flex justify-content-around">
                        <a className="navbar-brand" href='/'>Disease Tracker</a>
                        <div className="">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="heroDiv">
                <div className="detailDiv">
                    <p> A community of <strong>7,098,580 </strong>
                        people tracking local COVID-19 and flu outbreaks.</p>

                    <p className='how'>How are you feeling?</p>

                    <button className='btn btn-success m-3'><i className="fa fa-solid fa-thumbs-up"></i> Healthy, thanks!</button>
                    <button className='btn btn-danger'><i className="fa fa-solid fa-thumbs-down"></i> Not feeling well</button>

                </div>

                <div className="nichePatti">

                </div>

            </div>

            <div className="mapSec">
                <h2 className='text-center '>See COVID-19 and Flu in your community</h2>
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

            </footer>

        </>
    )
}

export default Home