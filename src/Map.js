import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css';

function Map({ stations }) {

    return (


        <>
            <table className='train-table'>
                <tr className='table-row'>
                    <th className='th'>Eighth Ave Line</th>
                    <th className='th'><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/NYCS-bull-trans-A-Std.svg/1280px-NYCS-bull-trans-A-Std.svg.png" alt="A" /></th>
                    <th className='th'><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/NYCS-bull-trans-C-Std.svg/1280px-NYCS-bull-trans-C-Std.svg.png" alt="C" /></th>
                    <th className='th'><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYCS-bull-trans-E-Std.svg/1280px-NYCS-bull-trans-E-Std.svg.png" alt="E" /></th>
                    <th></th>

                </tr>
                <tr>
                    <th>Sixth Ave Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NYCS-bull-trans-B-Std.svg/1280px-NYCS-bull-trans-B-Std.svg.png" alt="B" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NYCS-bull-trans-D-Std.svg/1280px-NYCS-bull-trans-D-Std.svg.png" alt="D" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/NYCS-bull-trans-F-Std.svg/1280px-NYCS-bull-trans-F-Std.svg.png" alt="F" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NYCS-bull-trans-M-Std.svg/1280px-NYCS-bull-trans-M-Std.svg.png" alt="M" /></th>

                </tr>
                <tr>
                    <th>Crosstown Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NYCS-bull-trans-G-Std.svg/1280px-NYCS-bull-trans-G-Std.svg.png" alt="G" /></th>
                </tr>
                <tr>
                    <th>Canarsie Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NYCS-bull-trans-L-Std.svg/1280px-NYCS-bull-trans-L-Std.svg.png" alt="L" /></th>
                </tr>
                <tr>
                    <th>Nassau Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/NYCS-bull-trans-J-Std.svg/1280px-NYCS-bull-trans-J-Std.svg.png" alt="J" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/NYCS-bull-trans-Z-Std.svg/1280px-NYCS-bull-trans-Z-Std.svg.png" alt="Z" /></th>
                </tr>
                <tr>
                    <th>Broadway Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYCS-bull-trans-N-Std.svg/1280px-NYCS-bull-trans-N-Std.svg.png" alt="N" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NYCS-bull-trans-Q-Std.svg/1280px-NYCS-bull-trans-Q-Std.svg.png" alt="Q" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/NYCS-bull-trans-R-Std.svg/1280px-NYCS-bull-trans-R-Std.svg.png" alt="R" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-W-Std.svg/1280px-NYCS-bull-trans-W-Std.svg.png" alt="W" /></th>
                </tr>
                <tr>
                    <th>Broadway-Seventh Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/NYCS-bull-trans-1-Std.svg/1280px-NYCS-bull-trans-1-Std.svg.png" alt="1" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NYCS-bull-trans-2-Std.svg/1280px-NYCS-bull-trans-2-Std.svg.png" alt="2" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NYCS-bull-trans-3-Std.svg/1280px-NYCS-bull-trans-3-Std.svg.png" alt="3" /></th>
                </tr>
                <tr>
                    <th>Lexington Ave Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/NYCS-bull-trans-4-Std.svg/1280px-NYCS-bull-trans-4-Std.svg.png" alt="4" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/NYCS-bull-trans-5-Std.svg/1280px-NYCS-bull-trans-5-Std.svg.png" alt="5" /></th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/NYCS-bull-trans-6-Std.svg/1280px-NYCS-bull-trans-6-Std.svg.png" alt="6" /></th>
                </tr>
                <tr>
                    <th>Flushing Line</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/NYCS-bull-trans-7-Std.svg/1280px-NYCS-bull-trans-7-Std.svg.png" alt="7" /></th>
                </tr>
                <tr>
                    <th>Shuttles</th>
                    <th><img className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-S-Std.svg/300px-NYCS-bull-trans-S-Std.svg.png" alt="S" /></th>
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