import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css';
import React, { useState, useEffect } from 'react';

function Map({ stations }) {

    const [lines, setLines] = useState([])

    const [search, setSearch] = useState('')

    const [comment, setComment] = useState('')

    console.log(comment)

    //what is this fetch doing?
    useEffect(() => {
        fetch('http://localhost:3000/linesInformation')
            .then(r => r.json())
            .then(data => setLines(data))
    }, [])

    //i beleive that this fetch actually makes the popup when you click on the table. 
    useEffect(() => {
        fetch(`http://localhost:3000/comments?line=${search}`)
            .then(r => r.json())
            .then(data => setComment(data[0]?.comment))
    }, [search])




    // const Ifound= lines.find(element => element.line === setSearch(element))
    // const Ifound= lines.find(element => element.line.includes(setLines(element)))
    // const Ifound= lines.find(element => element.line.includes(lines))

    const Ifound = lines.filter(element => element.line === search)

    // is this supposed to be the handle delete function?
    function handleRemove(e) {
        setSearch('')
    }
    //here we're gonna make the state variable that holds the displayed station
    const [displayedStations, setDisplayedStations] = useState(stations)
    //on each of the table click events, update the stations


    //i am thinking we should make a handle click function to reduce clutter and dry up the code. 

    function handleClick(e) {
        console.log(e.target.name)
        setSearch(e.target.name)
    }
    return (
        <>
            <div className='table-div'>
                <table className='train-table'>
                    <tr className='table-row'>
                        <th className='th'>Eighth Ave Line</th>
                        <th className='th'><img name='A' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/NYCS-bull-trans-A-Std.svg/1280px-NYCS-bull-trans-A-Std.svg.png" alt="A" /></th>
                        <th className='th'><img name='C' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/NYCS-bull-trans-C-Std.svg/1280px-NYCS-bull-trans-C-Std.svg.png" alt="C" /></th>
                        <th className='th'><img name='E' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYCS-bull-trans-E-Std.svg/1280px-NYCS-bull-trans-E-Std.svg.png" alt="E" /></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Sixth Ave Line</th>
                        <th>< img name='B' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NYCS-bull-trans-B-Std.svg/1280px-NYCS-bull-trans-B-Std.svg.png" alt="B" /></th>
                        <th name='D'><img name='D' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NYCS-bull-trans-D-Std.svg/1280px-NYCS-bull-trans-D-Std.svg.png" alt="D" /></th>
                        <th name='F'><img name='F' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/NYCS-bull-trans-F-Std.svg/1280px-NYCS-bull-trans-F-Std.svg.png" alt="F" /></th>
                        <th name='M'><img name='M' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NYCS-bull-trans-M-Std.svg/1280px-NYCS-bull-trans-M-Std.svg.png" alt="M" /></th>
                    </tr>
                    <tr >
                        <th>Crosstown Line</th>
                        <th name='G'><img name='G' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NYCS-bull-trans-G-Std.svg/1280px-NYCS-bull-trans-G-Std.svg.png" alt="G" /></th>
                    </tr>
                    <tr>
                        <th>Canarsie Line</th>
                        <th name='L'><img name='L' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NYCS-bull-trans-L-Std.svg/1280px-NYCS-bull-trans-L-Std.svg.png" alt="L" /></th>
                    </tr>
                    <tr >
                        <th>Nassau Line</th>
                        <th name='J'><img name='J' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/NYCS-bull-trans-J-Std.svg/1280px-NYCS-bull-trans-J-Std.svg.png" alt="J" /></th>
                        <th name='Z'><img name='Z' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/NYCS-bull-trans-Z-Std.svg/1280px-NYCS-bull-trans-Z-Std.svg.png" alt="Z" /></th>
                    </tr>
                    <tr >
                        <th>Broadway Line</th>
                        <th name='N'><img name='N' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYCS-bull-trans-N-Std.svg/1280px-NYCS-bull-trans-N-Std.svg.png" alt="N" /></th>
                        <th name='Q'><img name='Q' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NYCS-bull-trans-Q-Std.svg/1280px-NYCS-bull-trans-Q-Std.svg.png" alt="Q" /></th>
                        <th name='R'><img name='R' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/NYCS-bull-trans-R-Std.svg/1280px-NYCS-bull-trans-R-Std.svg.png" alt="R" /></th>
                        <th name='W'><img name='W' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-W-Std.svg/1280px-NYCS-bull-trans-W-Std.svg.png" alt="W" /></th>
                    </tr>
                    <tr>
                        <th>Broadway-Seventh Line</th>
                        <th name='1'><img name='1' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/NYCS-bull-trans-1-Std.svg/1280px-NYCS-bull-trans-1-Std.svg.png" alt="1" /></th>
                        <th name='2'><img name='2' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NYCS-bull-trans-2-Std.svg/1280px-NYCS-bull-trans-2-Std.svg.png" alt="2" /></th>
                        <th name='3'><img name='3' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NYCS-bull-trans-3-Std.svg/1280px-NYCS-bull-trans-3-Std.svg.png" alt="3" /></th>
                    </tr>
                    <tr>
                        <th>Lexington Ave Line</th>
                        <th name='4'><img name='4' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/NYCS-bull-trans-4-Std.svg/1280px-NYCS-bull-trans-4-Std.svg.png" alt="4" /></th>
                        <th name='5'><img name='5' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/NYCS-bull-trans-5-Std.svg/1280px-NYCS-bull-trans-5-Std.svg.png" alt="5" /></th>
                        <th name='6'><img name='6' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/NYCS-bull-trans-6-Std.svg/1280px-NYCS-bull-trans-6-Std.svg.png" alt="6" /></th>
                    </tr>
                    <tr>
                        <th>Flushing Line</th>
                        <th name='7'><img name='7' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/NYCS-bull-trans-7-Std.svg/1280px-NYCS-bull-trans-7-Std.svg.png" alt="7" /></th>
                    </tr>
                    <tr>
                        <th>Shuttles</th>
                        <th name='S'><img name='S' onClick={(e) => handleClick(e)} className="Metro-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-S-Std.svg/300px-NYCS-bull-trans-S-Std.svg.png" alt="S" /></th>
                    </tr>
                </table>
            </div>
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
                            //this is where we can conditionally render the selected train lines, with the default being all of them?

                            //some psuedocode for how this filter works
                            //we need a state that handles the current displayed train lines
                            //when we click on one of the lines in the chart above, we set the state of the current displayed train lines to that line
                            //we also need a variable that filters all the train lines by the current state.
                            //Now that I'm looking at this, I'm thinking that the above variable is going to have to work with the stations state directly
                            //some actual code of how this might look might be like so

                            // const displayedStations = stations.filter((metroLine) => {
                            //return metroLine.line.includes(variable from line 118)
                            // })
                            <Marker key={station.objectid} position={[station.the_geom.coordinates[1], station.the_geom.coordinates[0]]} >
                                <Popup className="popup">
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
            <div>
                {Ifound.map((line) => {
                    return (
                        <div className='please-work'>
                            <img className='metro-image' src={line.image} alt={line.line} />
                            <img className='metro-map' src={line.map_image} alt={line.name} />
                            <p>{comment}</p>
                            <button className='remove-button-homepage' onClick={handleRemove}>X</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Map