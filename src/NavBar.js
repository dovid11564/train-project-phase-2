import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='header'>
       <h2 className='webiste-title'>Website Title</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/lines">Lines</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default NavBar