import React from 'react'
import'./Header.css'
import { Link } from 'react-router-dom'
import Button from './parts/button'
const Header = () => {
  return (
    <div >
  <nav class="navbar navbar-dark  changebackground">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Link to="/">T Money</Link><img id='logo' src='logo192.png'/></a> <Button/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" type='disable'><h1>Sohan Lal Sharma</h1></a>
          <img src='logo192.png'/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ID-24538</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Amount</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Ticket</a></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
            <li><a class="dropdown-item" href="#">About us</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</nav>

  </div>
  )
}

export default Header