import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
return(
    <nav className="navbar navbar-light bg-dark">
    <a className="navbar-brand"><Link to={'./'}>Registration</Link></a>
    <div className="mx-auto"> {/* Center-aligned content */}
        <form className="form-inline">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
         
        </form>
      </div>
    <form className="form-inline">
    <a className="navbar-brand"><Link to={'./About'}>About</Link></a>
     <button className="btn btn-outline-success my-2 my-sm-0" type="Login"> <Link to={'/login'}><span>Sign In</span></Link></button>
    </form>
  </nav>
)
};
export default Navbar;

