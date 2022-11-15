import { NavLink } from "react-router-dom"

function NavBar () {
    return(
        <div>
        <NavLink
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
        >
          About
        </NavLink>
        <NavLink
          to="/lines"
          exact
          
        >
          Lines
        </NavLink>
      </div> 
    )
}

export default NavBar