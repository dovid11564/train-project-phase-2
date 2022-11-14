import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './App.css';

function Map({ stations }) {

    return (
        <MapContainer center={[40.7128, -74.0060]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map(station => {
                // console.log(station.the_geom.coordinates)
                return (
                    <Marker key={station.objectid} position={[station.the_geom.coordinates[1], station.the_geom.coordinates[0]]} >

                        <Popup>
                            {station.name}
                        </Popup>
                    </Marker>
                )
            })}


            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default Map