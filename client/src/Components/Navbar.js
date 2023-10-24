import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
return(
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand"><Link to={'./'}>Registration</Link></a>
    <form className="form-inline">
    <a className="navbar-brand"><Link to={'./About'}>About</Link></a>
     <button className="btn btn-outline-success my-2 my-sm-0" type="Login"> <Link to={'/login'}><span>Sign In</span></Link></button>
    </form>
  </nav>
)
};
export default Navbar;

