import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { blueIcon, greenIcon, orangeIcon, redIcon, yellowIcon } from '../Components/Icons';
import LocationMarker from "../Components/LocationMarker";
import '../CSS/Map.css'
import { getAllPoints } from '../Utils/Apis/Apis';

const Map = () => {

    const [points, setPoints] = useState([]);
    const cityNames = [];
    const redZone = [];

    // color variables
    // const fillBlueOptions = { fillColor: 'blue' }
    // const fillRedOptions = { fillColor: 'red' }


    useEffect(() => {

        const fetchAllPoints = async () => {
            const allPoints = await getAllPoints();
            setPoints(allPoints.res.data);
            console.log(allPoints);

        }

        fetchAllPoints();

    }, [])

    var dengue = points.filter(e => e.disease === "Dengue");
    var malaria = points.filter(e => e.disease === "Malaria");
    var tuberculosis = points.filter(e => e.disease === "Tuberculosis");
    var covid = points.filter(e => e.disease === "Covid-19");
    var typhoid = points.filter(e => e.disease === "Typhoid");

    points.map((e) => {
        if (!cityNames.includes(e.city)) {
            cityNames.push(e.city);
        }
        return 0;
    })

    cityNames.map((e) => {
        if (points.filter(ep => ep.city === e).length > 2) {
            redZone.push(e);
        }
        return 0;
    })


    return (
        <>
            <div className="infro">
                <p className='mb-2'>You are at this loaction</p>
                <p className='mb-2'>Dengue: {dengue.length}</p>
                <p className='mb-2'>Malaria: {malaria.length}</p>
                <p className='mb-2'>Tuberculosis: {tuberculosis.length}</p>
                <p className='mb-2'>Covid-19: {covid.length}</p>
                <p className='mb-2'>Typhoid: {typhoid.length}</p>
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

                    {dengue.map(i =>
                        <Marker position={[i.lat, i.long]} icon={greenIcon}>
                            <Popup>
                                <p>{i.city}</p>
                                <small>{i.lat},{i.long}</small>
                            </Popup>
                        </Marker>
                    )}

                    {malaria.map(i =>
                        <Marker position={[i.lat, i.long]} icon={blueIcon}>
                            <Popup>
                                <p>{i.city}</p>
                                <small>{i.lat},{i.long}</small>
                            </Popup>
                        </Marker>
                    )}

                    {covid.map(i =>
                        <Marker position={[i.lat, i.long]} icon={yellowIcon}>
                            <Popup>
                                <p>{i.city}</p>
                                <small>{i.lat},{i.long}</small>
                            </Popup>
                        </Marker>
                    )}

                    {tuberculosis.map(i =>
                        <Marker position={[i.lat, i.long]} icon={redIcon}>
                            <Popup>
                                <p>{i.city}</p>
                                <small>{i.lat},{i.long}</small>
                            </Popup>
                        </Marker>
                    )}

                    {typhoid.map(i =>
                        <Marker position={[i.lat, i.long]} icon={orangeIcon}>
                            <Popup>
                                <p>{i.city}</p>
                                <small>{i.lat},{i.long}</small>
                            </Popup>
                        </Marker>
                    )}

                </MapContainer>
            </div>

        </>
    );
}

export default Map