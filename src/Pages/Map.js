import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../Components/LocationMarker";
import '../CSS/Map.css'
import { getAllPoints } from '../Utils/Apis/Apis';

const Map = () => {

    const [points, setPoints] = useState([]);
    const cityNames = [];
    const redZone = [];

    // color variables
    const fillBlueOptions = { fillColor: 'blue' }
    const fillRedOptions = { fillColor: 'red' }


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

                    {points.map(i =>
                        <Circle center={[i.lat, i.long]} pathOptions={fillBlueOptions} radius={100} />
                    )}
                    {/* <Circle center={[25.9210, 80.7996]} pathOptions={fillRedOptions} radius={100000} /> */}
                    <Circle center={[22.892, 87.9215]} pathOptions={fillRedOptions} radius={100000} />
                    <Circle center={[26.2554, 88.2009]} pathOptions={fillRedOptions} radius={100000} />
                    <Circle center={[15.6994, 80.4635]} pathOptions={fillRedOptions} radius={150000} />
                    <Circle center={[19.2647, 84.8620]} pathOptions={fillRedOptions} radius={100000} />

                    {/* {
                        redZone.map(e => {
                            var temp = points.filter(ep => ep.city === e);
                            var redpoints = [];
                            temp.map(tem => {
                                redpoints.push([tem.lat, tem.long]);
                            })


                            return <Polygon pathOptions={fillRedOptions} positions={redpoints} />

                        })
                    } */}


                </MapContainer>
            </div>

        </>
    );
}

export default Map