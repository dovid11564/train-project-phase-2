import { useState, useEffect } from "react"
import Map from "./Map"
import HomePageLines from "./HomePageLines"

function Page({ Ifound }) {

    //creating state to hold subway station data
    const [stations, setStations] = useState([])

    //fetching the total station data for map
    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
            .then(response => response.json())
            .then(data => setStations(data))
    }, [])  

    //we should be able to filter the above data by line by rendering markers for example like stations.line.includes(1).
    //I'm forgetting the exact js notation, but shouldn't be hard to figure out
    //this is the same fetch that we are doing on Header.js line 18. 

    return (
        <>
            <div class="flex-container">
                <Map stations={stations} />
            </div>
        </>
    )
}

export default Page