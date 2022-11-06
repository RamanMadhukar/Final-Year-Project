import React from 'react'
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../Components/LocationMarker";

const Map = () => {
    const fillBlueOptions = { fillColor: 'red' }

    const center = [30.213, 75.69];
    const center2 = [30.2136, 75.7];
    const center3 = [30.2161488, 75.7015973];

    const points = [
        center, center2, center3
    ]

    var b = 75.7;
    var a = 30.21;

    for (var i = 0; i < 100; i++) {
        var random = Math.random();
        console.log(random);
        a = a + random * 0.01 * random;
        b = b + random * 0.01 * random;

        points.push([a, b]);
    }



    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker />


                {points.map(i =>
                    <Circle center={i} pathOptions={fillBlueOptions} radius={20} />
                )}

            </MapContainer>

        </>
    );
}

export default Map