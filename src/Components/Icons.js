import { Icon } from "leaflet";
const size = [20, 20]

const blueIcon = new Icon({
    iconUrl:
        "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    iconSize: size
}),
    greenIcon = new Icon({
        iconUrl:
            "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        iconSize: size
    }),
    orangeIcon = new Icon({
        iconUrl:
            "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
        iconSize: size
    }),
    redIcon = new Icon({
        iconUrl:
            "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        iconSize: size
    }),
    yellowIcon = new Icon({
        iconUrl:
            "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        iconSize: size
    });

export {
    blueIcon, greenIcon, orangeIcon, redIcon, yellowIcon
}