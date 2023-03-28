import React from 'react';
import styles from './navbar.module.css';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center w-100">
    <div>
    <a className="navbar-brand text-white">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className='nav-link' to='#portfolio'>portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to='#about'>about</Link>

        </li>
        <li className="nav-item">
        <Link className='nav-link' to='#contact'>contact</Link>

        </li>
      </ul>
    </div>
    </div>
    </div>
  </div>
</nav>
  )
}
