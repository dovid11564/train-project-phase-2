import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='header'>
       <h2 className='webiste-title'>New York Subway Community</h2>
       <div className="NavBarLinks">
      <NavLink className='home-link'to="/">Home</NavLink>
      <NavLink className='community-link'to="/lines">Comunity</NavLink>
      <NavLink className='about-link'to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default NavBar