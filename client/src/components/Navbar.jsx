import React from 'react'
import './navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div className='container-fluid ' id='nav'>
      <div className='row'>
        {/* <div className='col'> */}
{/* 
    <nav class="navbar bg-body-tertiary" id='nav'>
  <div class="container-fluid"> */}
    
    {/* <form class="d-flex" role="search">
       <div  className='home'>HOME</div>
       <div className='hai'>LOGIN</div>
       <div className='regi'>REGISTRATION</div>
       <div className='menus'> MENUS</div>
       <div className='cat'>CATERING</div>
      <input class="form-control me-2" type="search" placeholder="Search"  aria-label="Search" id='search'/>
      <button class="btn btn-outline-dark" type="submit">Search</button>
    </form> */}
<nav class="navbar navbar-expand-lg bg-body-primary" >
  <div class="container-fluid">
    {/* <a class="navbar-brand" >Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/login">LOGIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="registration">REGISTRATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/profile">PROFILE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="addfood">ADD-FOOD</a>
        </li>
        {/* <li>
        <a href="#" class="fa fa-fork-knife" style={{color:"white"}}></a>
        </li> */}

        {/* <li>
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
        </li> */}
        
        {/* <li class="nav-item">
          <a class="nav-link active" href="menus">MENUS</a>
        </li> */}
        {/* <i className='spoon' class="fa-solid fa-fork-knife"></i> */}
        <li>
        <a class="nav-link active" href="/cart">CART</a>
        </li>
        <li>
        <a class="nav-link active" href="/wishlist">WISHLIST</a>
        </li>
        {/* <li><FontAwesomeIcon icon="fa-solid fa-fork-knife" /></li> */}
        {/* <i class="fa-solid fa-fork-knife"></i> */}

        {/* <i className="fa-solid fa-fork-knife"></i> */}
        
       

        
       
        
      </ul>
    </div>
  </div>
</nav>
    
  </div>
{/* </nav> */}
</div>
// </div>
  )
}
