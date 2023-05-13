import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { blueIcon, greenIcon, orangeIcon, redIcon, yellowIcon } from '../Components/Icons';
import LocationMarker from "../Components/LocationMarker";
import Navbar from '../Components/Navbar';
import '../CSS/Map.css'
import { getAllPoints } from '../Utils/Apis/Apis';

const Map = () => {

    const [points, setPoints] = useState([]);
    const [showDengue, setshowDengue] = useState(true);
    const [showMalaria, setshowMalaria] = useState(true);
    const [showCovid, setshowCovid] = useState(true);
    const [showTuberculosis, setshowTuberculosis] = useState(true);
    const [showTyphiod, setshowTyphiod] = useState(true);
    const [dengue, setdengue] = useState([]);
    const [malaria, setmalaria] = useState([]);
    const [tuberculosis, settuberculosis] = useState([]);
    const [covid, setcovid] = useState([]);
    const [typhoid, settyphoid] = useState([]);
    const cityNames = [];
    const redZone = [];
    const [month, setmonth] = useState(['0']);
    const [renderpoints, setrenderpoints] = useState([]);
    // var month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    // color variables
    // const fillBlueOptions = { fillColor: 'blue' }
    // const fillRedOptions = { fillColor: 'red' }


    useEffect(() => {

        const fetchAllPoints = async () => {
            const allPoints = await getAllPoints();
            setPoints(allPoints.res.data);
            setrenderpoints(allPoints.res.data);

        }

        fetchAllPoints();

    }, [])

    const monthChange = input => e => {
        if (e.target.checked) {
            setmonth([...month, input]);
        }
        else {
            setmonth(p => p.filter(ep => ep !== input))
        }
    }






    // points.map((e) => {
    //     if (!cityNames.includes(e.city)) {
    //         cityNames.push(e.city);
    //     }
    //     return 0;
    // })

    // cityNames.map((e) => {
    //     if (points.filter(ep => ep.city === e).length > 2) {
    //         redZone.push(e);
    //     }
    //     return 0;
    // })


    useEffect(() => {

        if (month.length === 1) {
            setrenderpoints(points);
        }
        else {
            var data = [];
            month.map(i => {
                var jan = points.filter(e => {
                    const m = e.start_date;
                    return m.split("-")[1] === i
                });
                data.push(...jan);
                return 0;
            })

            setrenderpoints(data);
        }

    }, [month, points])


    useEffect(() => {

        setdengue(renderpoints.filter(e => e.disease === "Dengue"))
        setmalaria(renderpoints.filter(e => e.disease === "Malaria"))
        settuberculosis(renderpoints.filter(e => e.disease === "Tuberculosis"))
        settyphoid(renderpoints.filter(e => e.disease === "Typhoid"))
        setcovid(renderpoints.filter(e => e.disease === "Covid-19"))

    }, [renderpoints, points])
    return (
        <>

            <Navbar />

            <div className="">

                <div className="infro">

                    <div className="infoDiv">

                        <p className='mb-2'>You are at this loaction</p>

                        <p className='mb-2'>
                            <input className='diseaseCheckbox' type="checkbox" checked={showDengue} onClick={() => setshowDengue(!showDengue)} />
                            <img className="iconImg" src="https://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="" />
                            Dengue: {dengue.length}
                        </p>
                        <p className='mb-2'>
                            <input className='diseaseCheckbox' type="checkbox" checked={showMalaria} onClick={() => setshowMalaria(!showMalaria)} />
                            <img className="iconImg" src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="" />
                            Malaria: {malaria.length}
                        </p>
                        <p className='mb-2'>
                            <input className='diseaseCheckbox' type="checkbox" checked={showTuberculosis} onClick={() => setshowTuberculosis(!showTuberculosis)} />
                            <img className="iconImg" src="https://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="" />
                            TB: {tuberculosis.length}
                        </p>
                        <p className='mb-2'>
                            <input className='diseaseCheckbox' type="checkbox" checked={showCovid} onClick={() => setshowCovid(!showCovid)} />
                            <img className="iconImg" src="https://maps.google.com/mapfiles/ms/icons/yellow-dot.png" alt="" />
                            Covid-19: {covid.length}
                        </p>
                        <p className='mb-2'>
                            <input className='diseaseCheckbox' type="checkbox" checked={showTyphiod} onClick={() => setshowTyphiod(!showTyphiod)} />
                            <img className="iconImg" src="https://maps.google.com/mapfiles/ms/icons/orange-dot.png" alt="" />
                            Typhoid: {typhoid.length}
                        </p>
                    </div>

                    <div className="infoDiv mt-2">
                        <h6 className='text-center'>Filter by Month</h6>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('1')} />
                            <label htmlFor="">January</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('2')} />
                            <label htmlFor="">February</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('3')} />
                            <label className='ml-3' htmlFor="">March</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('4')} />
                            <label htmlFor="">April</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('5')} />
                            <label htmlFor="">May</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('6')} />
                            <label htmlFor="">June</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('7')} />
                            <label htmlFor="">July</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('8')} />
                            <label htmlFor="">August</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('9')} />
                            <label htmlFor="">September</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('10')} />
                            <label htmlFor="">October</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('11')} />
                            <label htmlFor="">Novmber</label>
                        </div>

                        <div className="">
                            <input className='diseaseCheckbox mr-2' type="checkbox" onChange={monthChange('12')} />
                            <label htmlFor="">December</label>
                        </div>

                    </div>

                </div>
                <div className="mapDiv">
                    <MapContainer center={[8.410, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <LocationMarker />

                        {/* {points.map(i =>
                        <Circle center={[i.lat, i.long]} pathOptions={fillBlueOptions} radius={100} />
                    )} */}

                        {showDengue && dengue.map(i =>
                            <Marker position={[i.lat, i.long]} icon={greenIcon}>
                                <Popup>
                                    <p>{i.city}</p>
                                    <small>{i.lat},{i.long}</small>
                                </Popup>
                            </Marker>
                        )}

                        {showMalaria && malaria.map(i =>
                            <Marker position={[i.lat, i.long]} icon={blueIcon}>
                                <Popup>
                                    <p>{i.city}</p>
                                    <small>{i.lat},{i.long}</small>
                                </Popup>
                            </Marker>
                        )}

                        {showCovid && covid.map(i =>
                            <Marker position={[i.lat, i.long]} icon={yellowIcon}>
                                <Popup>
                                    <p>{i.city}</p>
                                    <small>{i.lat},{i.long}</small>
                                </Popup>
                            </Marker>
                        )}

                        {showTuberculosis && tuberculosis.map(i =>
                            <Marker position={[i.lat, i.long]} icon={redIcon}>
                                <Popup>
                                    <p>{i.city}</p>
                                    <small>{i.lat},{i.long}</small>
                                </Popup>
                            </Marker>
                        )}

                        {showTyphiod && typhoid.map(i =>
                            <Marker position={[i.lat, i.long]} icon={orangeIcon}>
                                <Popup>
                                    <p>{i.city}</p>
                                    <small>{i.lat},{i.long}</small>
                                </Popup>
                            </Marker>
                        )}

                    </MapContainer>
                </div>
            </div>

        </>
    );
}

export default Map