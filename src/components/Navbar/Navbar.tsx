import './navbar.css'

import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Prévoir un logo dans le futur */}
      <Link to='/'className='logo'>LDS</Link>
      <div className="navbar-menu">
        <NavLink to="/" className="isActive">Home</NavLink>
        <NavLink to="/about" className="isActive">About</NavLink>
        <NavLink to="/portfolio" className="isActive">Portfolio</NavLink>
        <NavLink to="/clients" className="isActive">Contact</NavLink>
      </div>
    </nav> 
  ); 
}
export default Navbar