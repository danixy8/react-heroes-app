import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
  
  const {user, dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  const action = {type: types.logout};

  const handleLogout = () => {
    console.log('handleLogout')
    dispatch(action);

    navigate('/login', {
      replace: true
    });
  };

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link 
        className="navbar-brand" 
        to="/"
      >
        Asociaciones
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" 
      >
        <span 
          className="navbar-toggler-icon"
        >
        </span>
      </button>
      <div 
        className="collapse navbar-collapse" 
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink 
            className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active': '')} 
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink 
            className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active': '')} 
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink 
            className={ ({ isActive }) => 'nav-item nav-link btn btn-outline-dark d-flex flex-row' + (isActive ? 'active': '')} 
            to="/search"
          >
          <i className="fa fa-search m-2 mt-1"></i>
            Buscar
          </NavLink>
        </div>
        <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
              {user.name}
            </span>
            <button
              className="nav-item nav-link btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
        
      </div>
    </div>
  </nav>

  )
}