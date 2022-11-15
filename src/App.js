import React from "react"
import {
  Switch, 
  Route, 
  Link
} from "react-router-dom"

import Map from "./Page";
import About from "./About";
import NavBar from "./NavBar";
import Lines from "./Lines";
import './App.css';



function App() {
  return (
<>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lines">Lines</Link>
        </li>
      </ul>

      {/* switch statement here */}

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/lines">
          <Lines />
        </Route>
        <Route path="/">
          <Map />
        </Route>
      </Switch>
    </div>
</>
    // <Router>
    //   <div>
    //     <NavBar />

    //     <Switch>
    //       <Route exact path="/about">
    //         <About />
    //       </Route>
    //       <Route exact path="/lines">
    //         <Lines />
    //       </Route>
    //       <Route exact path="/">
    //         <Page />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
