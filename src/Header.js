function Header () {
    return(
        <header className='header'>
        <a className='header-home'href="#home" >Home</a>
        <label for="Lines"></label>
<select className='header-lines'name="Lines" id="Lines">
<option value="All">Metro-Lines</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
        <a className='header-about'href="#about" >About</a>
        </header>
    )
}
export default Header