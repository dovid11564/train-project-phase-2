import { useState, useEffect } from "react"
import Map from "./Map"
import HomePageLines from "./HomePageLines"

function Page() {

    //creating state to hold subway station data
    const [stations, setStations] = useState([])
    

    //fetching the total station data for map
    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
            .then(response => response.json())
            .then(data => setStations(data))
    },[])
    
    
    return (
        <>  
            <div class="flex-container">
                <HomePageLines/>
                <Map stations={stations} />
            </div>
        </>
    )
}

export default Page