
import React, { useEffect, useState } from 'react'
import About from "./About"
import Lines from "./Lines"
import Page from "./Page"
import NavBar from "./NavBar"
import {
  Switch,
  Route,
} from "react-router-dom"

function Header() {

  

  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000')
      .then(r => r.json())
      .then(data => setInfo(data))
  }, [])

  return (
    <>
      <NavBar />
      <div>
        {/* switch statements  */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Lines">
            <Lines info={info} />
          </Route>
          <Route path="/">
            {/* this is our default home page with the big map */}
            <Page />
          </Route>
        </Switch>
      </div>
    </>
  )
}
export default Header