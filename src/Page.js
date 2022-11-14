import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Map from "./Map"

function Page () {

    //creating state to hold subway station data
    const [stations, setStations] = useState([])

    //useEffect fetches here

    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
        .then(response => response.json())
        .then(data => setStations(data))
    })
    return(
        <>
        <p>page</p>
        <NavBar />
        <SideBar />
        <Map stations={stations} />
        </>
    )
}

export default Page