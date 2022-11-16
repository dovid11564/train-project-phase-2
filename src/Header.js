
import About from "./About"
import Lines from "./Lines"
import Page from "./Page"
import NavBar from "./NavBar"
import {
  Switch,
  Route,
} from "react-router-dom"



function Header() {
  return (
    <>
    <h2>Website Name</h2>
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
            <Page />
          </Route>
        </Switch>
      </div>
    </>
  )
}
export default Header