import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Map from "./Map"
import SubmitForm from "./SubmitForm"

function Page() {
    //declaring our API keys from the MTA API so that we can
    //access them from the env file

    // const G_TRAIN_KEY = process.env.REACT_APP_G_API_key
    // console.log(G_TRAIN_KEY)

    //creating state to hold subway station data
    const [stations, setStations] = useState([])

    //creating state to hold information for the G train
    // const [GTrain, setGTrain] = useState([])

    //useEffect fetches here

    //fetching G train data for sidebar
    // useEffect(
    //     fetch(G_TRAIN_KEY)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // )

    //fetching the total station data for map
    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
            .then(response => response.json())
            .then(data => setStations(data))
    },[])

    return (
        <>
            <NavBar />
            <div class="flex-container">
                <p>page</p>
                <SideBar />
                <Map stations={stations} />
                <SubmitForm />
            </div>
        </>
    )
}

export default Page