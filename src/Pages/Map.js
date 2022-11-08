import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../Components/LocationMarker";
import axios from 'axios';
import './Map.css'

const Map = () => {

    const [points, setPoints] = useState([]);
    // const [dengue, setDengue] = useState();
    // const [malaria, setmalaria] = useState();
    // const [influenza, setInfluenza] = useState();
    var dengue = 0;
    var malaria = 0;
    var influenza = 0;

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

    points.map((e) => {
        if (e.disease === 'dengue') {
            dengue++;
        }

        else if (e.disease === 'malaria') {
            malaria++;
        }

        else if (e.disease === 'influenza') {
            influenza++;
        }
        return 0;
    })



    return (
        <>
            <div className="infro">
                <p className='mb-2'>You are at this loaction</p>
                <p className='mb-2'>Dengue: {dengue}</p>
                <p className='mb-2'>Malaria: {malaria}</p>
                <p className='mb-2'>Influenza: {influenza}</p>
            </div>
            <div className="mapDiv">
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
            </div>

        </>
    );
}

export default Map