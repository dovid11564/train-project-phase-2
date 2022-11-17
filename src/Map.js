import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css';

function Map({ stations }) {

    return (
        
            
                <>
                            <table className='train-table'>
                                <tr className='table-row'>
                                    <th className='th'>Eighth Ave Line</th>
                                    <th className='th'>a</th>
                                    <th className='th'>c</th>
                                    <th className='th'>e</th>
                                    <th></th>
                                   
                                </tr>
                                <tr>
                                    <th>Sixth Avenue Line</th>
                                    <th>b</th>
                                    <th>d</th>
                                    <th>f</th>
                                    <th>m</th>
                                    
                                </tr>
                                <tr>
                                    <th>Crosstown Line</th>
                                    <th>g</th>
                                </tr>
                                <tr>
                                    <th>Canarsie Line</th>
                                    <th>l</th>
                                </tr>
                                <tr>
                                    <th>Nassau Line</th>
                                    <th>J</th>
                                    <th>Z</th>
                                </tr>
                                <tr>
                                    <th>Broadway-Seventh Line</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                </tr>
                                <tr>
                                    <th>Lexington Avenue Line</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                </tr>
                                <tr>
                                    <th>Flushing Line</th>
                                    <th>7</th>
                                </tr>
                                <tr>
                                    <th>Shuttles</th>
                                    <th>S</th>
                                </tr>
                            </table>
                            
                        
        <div id="map">
        <MapContainer center={[40.7884341, -73.96042462582244]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map(station => {
                // console.log(station.the_geom.coordinates)
                //if lines === ACE, then color = blue etc
                return (
                    <Marker key={station.objectid} position={[station.the_geom.coordinates[1], station.the_geom.coordinates[0]]} >

                        <Popup>
                            {station.name}  <br /> {station.line}
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
        
        </div>
        </>
    )
}

export default Map