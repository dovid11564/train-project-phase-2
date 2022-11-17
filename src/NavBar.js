import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='header'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/lines">Lines</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default NavBar