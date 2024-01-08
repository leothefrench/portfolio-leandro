import './navbar.css'
import { NavLink } from 'react-router-dom'
import { FaMobile } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Prévoir un logo dans le futur */}
      <p className='logo'>LDS</p>
      <div className="navbar-menu">
        <NavLink to="/" className="isActive">Home</NavLink>
        <NavLink to="/about" className="isActive">About</NavLink>
        <NavLink to="/portfolio" className="isActive">Portfolio</NavLink>
        <NavLink to="/clients" className="isActive">Clients</NavLink>
      </div>
      <button className="btn-nav-contact"><FaMobile className="icon"/>Contactez-moi</button>
    </nav>
  ); 
}
export default Navbar