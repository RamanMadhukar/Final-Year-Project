import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../Components/LocationMarker";
import axios from 'axios';

const Map = () => {

    const [points, setPoints] = useState([]);

    const fillBlueOptions = { fillColor: 'red' }

    useEffect(() => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASE}/patient`
        })
            .then(response => {
                setPoints(response.data)
            })
            .catch(error => {
                console.log('Data not found', error);

            });
    }, [])


    console.log(points);

    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker />


                {points.map(i =>
                    <Circle center={[i.lat, i.lng]} pathOptions={fillBlueOptions} radius={20} />
                )}

            </MapContainer>

        </>
    );
}

export default Map