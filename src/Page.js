
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Map from "./Map"
import SubmitForm from "./SubmitForm"

function Page() {
   
    //creating state to hold subway station data
    const [stations, setStations] = useState([])
    
 
    //useEffect fetches here

    
    //fetching the total station data for map
    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
            .then(response => response.json())
            .then(data => setStations(data))
    },[])


function Page({ stations }) {
    return (
        <>
            <div class="flex-container">
                <Map stations={stations} />
            </div>
        </>
    )
}

export default Page