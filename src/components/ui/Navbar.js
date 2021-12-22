import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate('/login', {
          replace: true
      });
  };

  return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <Link 
        class="navbar-brand" 
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
          <i class="fa fa-search m-2 mt-1"></i>
            Buscar
          </NavLink>
        </div>
        <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
              Daniel
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

// <nav class="navbar navbar-expand-sm bg-light navbar-light border">
//   <div class="container">
//   <!-- Brand -->
//   <a class="navbar-brand" href="#">
//     <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style="width:120px;">
//   </a>
//    <!-- Toggler/collapsibe Button -->
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span class="navbar-toggler-icon"></span>
//   </button>
// <!-- Navbar links -->
//   <div class="collapse navbar-collapse" id="collapsibleNavbar">
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
//         New
//       </a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="#">Find New Cars</a>
//         <a class="dropdown-item" href="#">Latest Cars</a>
//         <a class="dropdown-item" href="#">Popular Cars</a>
//         <a class="dropdown-item" href="#">Upcoming Cars</a>
//         <a class="dropdown-item" href="#">Offers & Discounts</a>
//       </div>
//     </li>
//       <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
//         Used
//       </a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="#">Find Used Cars</a>
//         <a class="dropdown-item" href="#">Find by Brand</a>
//         <a class="dropdown-item" href="#">Find by Location</a>
//         <a class="dropdown-item" href="#">Upcoming Cars</a>
//         <a class="dropdown-item" href="#">Offers & Discounts</a>
//       </div>
//     </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Sell</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Compare</a>
//       </li>
//       <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
//         News & Reviews
//       </a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="#">Car News</a>
//         <a class="dropdown-item" href="#">Car Reviews</a>
//         <a class="dropdown-item" href="#">Car Videos</a>
//         <a class="dropdown-item" href="#">Write Review</a>
//       </div>
//     </li>
//     <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
//         More
//       </a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="#">Car Loan</a>
//         <a class="dropdown-item" href="#">EMI Calculator</a>
//         <a class="dropdown-item" href="#">Car Insurance</a>
//         <a class="dropdown-item" href="#">Ask Question</a>
//       </div>
//     </li>
      
//       <form class="form-inline" action="#">
//     <input class="form-control mr-sm-2" type="text" placeholder="Search Cars">
//     <button class="btn btn-success" type="submit"> Search</button>
//   </form>
//     </ul>
//   </div>
//  </div>
// </nav>
  )
}