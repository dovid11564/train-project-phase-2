import React from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import About from "./About";
import NavBar from "./NavBar";
import './App.css';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/lines" element={<Lines />} />
      <Route path="/about" element={<About />} />
    </Routes>
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
