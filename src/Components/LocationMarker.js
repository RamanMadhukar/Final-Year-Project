import React, { useEffect, useState } from 'react'
import { Marker, useMap } from "react-leaflet";
import L from 'leaflet';

const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom(), map.setZoom(7));
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius);
            circle.addTo(map);
            // setBbox(e.bounds.toBBoxString().split(","));

        });
    }, [map]);


    return position === null ? null : (
        <Marker position={position} >

        </Marker>
    );
}

export default LocationMarker