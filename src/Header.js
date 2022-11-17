import { useState, useEffect } from 'react'
import About from "./About"
import Lines from "./Lines"
import Page from "./Page"
import NavBar from "./NavBar"
import {
  Switch,
  Route,
} from "react-router-dom"



function Header() {

  //creating state to hold subway station data
  const [stations, setStations] = useState([])

  //fetching the total station data for map
  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")
      .then(response => response.json())
      .then(data => setStations(data))
  }, [])

  return (
    <>
      <h2>dovid and Alex's metro site</h2>
      <NavBar />
      <div>

        {/* switch statements  */}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lines">
            <Lines />
          </Route>
          <Route path="/">
            <Page stations={stations} />
          </Route>
        </Switch>
      </div>
    </>
  )
}
export default Header